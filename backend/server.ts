import express from 'express';
import { newsletterRouter } from './newsletter.ts';

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 5000;

  // Allow the separately deployed frontend to call this API.
  const allowedOrigins = (process.env.FRONTEND_ORIGIN || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim());
  app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin && allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin');
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
  });

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

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Algorithmist Official Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to initialize Algorithmist server:', err);
});
