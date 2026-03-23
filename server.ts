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
        to: ['reinharthauling@gmail.com'],
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
