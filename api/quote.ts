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
    const phone = String(body.phone ?? '').trim();
    const jobType = String(body.jobType ?? '').trim();
    const address = String(body.address ?? '').trim();
    const description = String(body.description ?? '').trim();

    if (!name || !phone || !address || !description) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    if (!resend) {
      console.warn('RESEND_API_KEY is not set. Quote email was not sent.');
      return Response.json({ success: true, message: 'Form received (email not sent - API key missing)' });
    }

    const { error } = await resend.emails.send({
      from: 'Reinhart Hauling & Cleanouts <onboarding@resend.dev>',
      to: ['office@reinharthauling.com'],
      subject: `New Quote Request: ${jobType || 'Cleanout'} from ${name}`,
      html: `
        <h1>New Quote Request</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Job Type:</strong> ${escapeHtml(jobType)}</p>
        <p><strong>Address:</strong> ${escapeHtml(address)}</p>
        <p><strong>Description:</strong></p>
        <p>${escapeHtml(description).replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return Response.json({ success: false, error: error.message }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Quote request error:', error);
    return Response.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
