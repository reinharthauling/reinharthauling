import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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
    const email = String(body.email ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const propertyAddress = String(body.propertyAddress ?? '').trim();
    const projectDetails = String(body.projectDetails ?? '').trim();

    if (!name || !email || !phone || !propertyAddress || !projectDetails) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    if (!resend) {
      console.warn('RESEND_API_KEY is not set. Service area inquiry email was not sent.');
      return Response.json({ success: true, message: 'Inquiry received (email not sent - API key missing)' });
    }

    const { error } = await resend.emails.send({
      from: 'Reinhart Hauling & Cleanouts <onboarding@resend.dev>',
      to: ['office@reinharthauling.com'],
      replyTo: email,
      subject: `Service Area Inquiry from ${name}`,
      html: `
        <h1>Service Area Inquiry</h1>
        <p><strong>Full Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Property Address:</strong> ${escapeHtml(propertyAddress)}</p>
        <p><strong>Project Details:</strong></p>
        <p>${escapeHtml(projectDetails).replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return Response.json({ success: false, error: error.message }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Service area inquiry error:', error);
    return Response.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
