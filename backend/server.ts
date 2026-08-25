import express from 'express';
import path from 'node:path';
import { createServer as createViteServer } from 'vite';
import { newsletterRouter } from './newsletter.ts';

const frontendRoot = path.resolve(process.cwd(), '../frontend');

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON and form payloads
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'operational',
      system: 'Algorithmist Parent Authority Service',
      version: '1.0.0',
      timestamp: new Date().toISOString()
    });
  });

  // Handle Contact Submissions
  app.post('/api/contact', (req, res) => {
    const { name, email, company, topic, message } = req.body;

    if (!name || !email || !company || !message) {
      return res.status(400).json({
        error: 'Missing required parameters. Please provide name, email, company, and message.'
      });
    }

    const ticketId = `ALG-${Math.floor(100000 + Math.random() * 900000)}`;

    console.log(`[Algorithmist Ingest] New inquiry registered: ${ticketId} from ${name} (${company}) [Topic: ${topic}]`);

    return res.status(200).json({
      success: true,
      ticketId,
      message: 'Inquiry received and routed to the Algorithmist Directorate.',
      receivedAt: new Date().toISOString()
    });
  });

  // Mount modular backend newsletter router
  app.use('/api/newsletter', newsletterRouter);

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      root: frontendRoot,
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(frontendRoot, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Algorithmist Official Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to initialize Algorithmist server:', err);
});
