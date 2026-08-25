import { Router, Request, Response } from 'express';

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
  source?: string;
  active: boolean;
}

// In-memory mock database store for testing and integration
const mockSubscribers: Map<string, NewsletterSubscriber> = new Map([
  [
    'lead.engineer@algorithmist.org',
    {
      id: 'sub_algo_001',
      email: 'lead.engineer@algorithmist.org',
      subscribedAt: new Date(Date.now() - 86400000 * 30).toISOString(),
      source: 'directorate_initial',
      active: true
    }
  ]
]);

export const newsletterRouter = Router();

/**
 * GET /api/newsletter
 * Returns health status and total subscriber count for integration verification
 */
newsletterRouter.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    status: 'operational',
    service: 'Algorithmist Technical Dispatches Newsletter Service',
    totalSubscribers: mockSubscribers.size,
    timestamp: new Date().toISOString()
  });
});

/**
 * GET /api/newsletter/subscribers
 * Mock route for integration testing to view registered mock emails
 */
newsletterRouter.get('/subscribers', (req: Request, res: Response) => {
  const subscribersList = Array.from(mockSubscribers.values()).map(sub => ({
    id: sub.id,
    email: sub.email.replace(/(?<=.{3}).(?=.*@)/g, '*'), // partial masking for clean response
    subscribedAt: sub.subscribedAt,
    active: sub.active
  }));

  return res.status(200).json({
    success: true,
    count: subscribersList.length,
    subscribers: subscribersList
  });
});

/**
 * POST /api/newsletter
 * Handles newsletter subscription submissions with validation and returns success payload
 */
newsletterRouter.post('/', (req: Request, res: Response) => {
  const { email, source } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Email address is required.'
    });
  }

  const sanitizedEmail = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(sanitizedEmail)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid RFC-compliant email address (e.g., engineer@organization.com).'
    });
  }

  const existingSubscriber = mockSubscribers.get(sanitizedEmail);

  if (existingSubscriber) {
    return res.status(200).json({
      success: true,
      message: 'You are already enrolled in Algorithmist Technical Dispatches.',
      isExisting: true,
      subscriber: {
        id: existingSubscriber.id,
        email: sanitizedEmail,
        subscribedAt: existingSubscriber.subscribedAt
      },
      stats: {
        totalSubscribers: mockSubscribers.size
      }
    });
  }

  const newSubscriber: NewsletterSubscriber = {
    id: `sub_${Math.random().toString(36).substring(2, 9)}_${Date.now()}`,
    email: sanitizedEmail,
    subscribedAt: new Date().toISOString(),
    source: typeof source === 'string' ? source : 'footer_form',
    active: true
  };

  mockSubscribers.set(sanitizedEmail, newSubscriber);

  console.log(`[Algorithmist Newsletter] Successfully enrolled subscriber: ${sanitizedEmail} (Total: ${mockSubscribers.size})`);

  return res.status(201).json({
    success: true,
    message: 'Successfully enrolled in Algorithmist Technical Dispatches.',
    subscriber: {
      id: newSubscriber.id,
      email: sanitizedEmail,
      subscribedAt: newSubscriber.subscribedAt,
      source: newSubscriber.source
    },
    stats: {
      totalSubscribers: mockSubscribers.size
    }
  });
});
