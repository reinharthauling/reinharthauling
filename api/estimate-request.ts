import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

type EstimatePhotoPayload = {
  filename: string;
  content: string;
  contentType: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const email = String(body.email ?? '').trim();
    const propertyAddress = String(body.propertyAddress ?? '').trim();
    const city = String(body.city ?? '').trim();
    const projectType = String(body.projectType ?? '').trim();
    const projectDescription = String(body.projectDescription ?? '').trim();
    const preferredContactMethod = String(body.preferredContactMethod ?? '').trim();
    const photo = body.photo as EstimatePhotoPayload | null | undefined;

    if (
      !name ||
      !phone ||
      !email ||
      !propertyAddress ||
      !city ||
      !projectType ||
      !projectDescription ||
      !preferredContactMethod
    ) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    if (!resend) {
      console.warn('RESEND_API_KEY is not set. Estimate request email was not sent.');
      return Response.json({ success: true, message: 'Request received (email not sent - API key missing)' });
    }

    const attachments =
      photo?.content && photo.filename
        ? [
            {
              filename: photo.filename,
              content: photo.content,
            },
          ]
        : undefined;

    const { error } = await resend.emails.send({
      from: 'Reinhart Hauling & Cleanouts <onboarding@resend.dev>',
      to: ['office@reinharthauling.com'],
      replyTo: email,
      subject: `Estimate Request: ${projectType} from ${name}`,
      html: `
        <h1>Estimate Request</h1>
        <p><strong>Full Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Property Address:</strong> ${escapeHtml(propertyAddress)}</p>
        <p><strong>City:</strong> ${escapeHtml(city)}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
        <p><strong>Preferred Contact Method:</strong> ${escapeHtml(preferredContactMethod)}</p>
        <p><strong>Brief Project Description:</strong></p>
        <p>${escapeHtml(projectDescription).replace(/\n/g, '<br />')}</p>
        <p><strong>Photo Attached:</strong> ${attachments ? 'Yes' : 'No'}</p>
      `,
      attachments,
    });

    if (error) {
      console.error('Resend Error:', error);
      return Response.json({ success: false, error: error.message }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Estimate request error:', error);
    return Response.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
