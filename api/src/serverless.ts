import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import { initializeServerlessApp } from './main';

let cachedServer: express.Express | undefined;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  if (!cachedServer) {
    const expressApp = express();
    await initializeServerlessApp(expressApp);
    cachedServer = expressApp;
  }

  cachedServer(req, res);
}
