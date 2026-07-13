import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/quote", async (req, res) => {
    const { name, phone, jobType, address, description } = req.body;

    if (!resend) {
      console.warn("RESEND_API_KEY is not set. Email will not be sent.");
      return res.status(200).json({ success: true, message: "Form received (Email not sent - API key missing)" });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'Reinhart Hauling & Cleanouts <onboarding@resend.dev>',
        to: ['office@reinharthauling.com'],
        subject: `New Quote Request: ${jobType} from ${name}`,
        html: `
          <h1>New Quote Request</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Job Type:</strong> ${jobType}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Description:</strong></p>
          <p>${description}</p>
        `,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(500).json({ success: false, error: error.message });
      }

      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Server Error:", err);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  app.post("/api/service-area-inquiry", async (req, res) => {
    const { name, email, phone, propertyAddress, projectDetails } = req.body;

    if (!name || !email || !phone || !propertyAddress || !projectDetails) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    if (!resend) {
      console.warn("RESEND_API_KEY is not set. Email will not be sent.");
      return res.status(200).json({ success: true, message: "Inquiry received (Email not sent - API key missing)" });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'Reinhart Hauling & Cleanouts <onboarding@resend.dev>',
        to: ['office@reinharthauling.com'],
        replyTo: email,
        subject: `Service Area Inquiry from ${name}`,
        html: `
          <h1>Service Area Inquiry</h1>
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Property Address:</strong> ${propertyAddress}</p>
          <p><strong>Project Details:</strong></p>
          <p>${projectDetails}</p>
        `,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(500).json({ success: false, error: error.message });
      }

      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Server Error:", err);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  app.post("/api/estimate-request", async (req, res) => {
    const {
      name,
      phone,
      email,
      propertyAddress,
      city,
      projectType,
      projectDescription,
      preferredContactMethod,
      photo,
    } = req.body;

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
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    if (!resend) {
      console.warn("RESEND_API_KEY is not set. Email will not be sent.");
      return res.status(200).json({ success: true, message: "Request received (Email not sent - API key missing)" });
    }

    try {
      const attachments =
        photo?.content && photo?.filename
          ? [{ filename: photo.filename, content: photo.content }]
          : undefined;

      const { data, error } = await resend.emails.send({
        from: 'Reinhart Hauling & Cleanouts <onboarding@resend.dev>',
        to: ['office@reinharthauling.com'],
        replyTo: email,
        subject: `Estimate Request: ${projectType} from ${name}`,
        html: `
          <h1>Estimate Request</h1>
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Property Address:</strong> ${propertyAddress}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Preferred Contact Method:</strong> ${preferredContactMethod}</p>
          <p><strong>Brief Project Description:</strong></p>
          <p>${projectDescription}</p>
          <p><strong>Photo Attached:</strong> ${attachments ? 'Yes' : 'No'}</p>
        `,
        attachments,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(500).json({ success: false, error: error.message });
      }

      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Server Error:", err);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  app.post("/api/estimate-request", async (req, res) => {
    const {
      name,
      phone,
      email,
      propertyAddress,
      city,
      projectType,
      projectDescription,
      preferredContactMethod,
      photo,
    } = req.body;

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
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    if (!resend) {
      console.warn("RESEND_API_KEY is not set. Email will not be sent.");
      return res.status(200).json({ success: true, message: "Request received (Email not sent - API key missing)" });
    }

    try {
      const attachments =
        photo?.content && photo?.filename
          ? [{ filename: photo.filename, content: photo.content }]
          : undefined;

      const { data, error } = await resend.emails.send({
        from: 'Reinhart Hauling & Cleanouts <onboarding@resend.dev>',
        to: ['office@reinharthauling.com'],
        replyTo: email,
        subject: `Estimate Request: ${projectType} from ${name}`,
        html: `
          <h1>Estimate Request</h1>
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Property Address:</strong> ${propertyAddress}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Preferred Contact Method:</strong> ${preferredContactMethod}</p>
          <p><strong>Brief Project Description:</strong></p>
          <p>${projectDescription}</p>
          <p><strong>Photo Attached:</strong> ${attachments ? 'Yes' : 'No'}</p>
        `,
        attachments,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(500).json({ success: false, error: error.message });
      }

      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Server Error:", err);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
