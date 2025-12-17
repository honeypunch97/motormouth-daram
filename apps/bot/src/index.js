import 'dotenv/config';
import process from 'node:process';

import { getConfig } from './config.js';
import { startHttp } from './http.js';
import { startDiscord } from './discord.js';
import { createDjangoClient } from './services/djangoClient.js';
import { createTtsService } from './services/tts.js';

async function main() {
  const cfg = getConfig();

  startHttp({ port: cfg.port });

  const djangoClient = createDjangoClient(cfg.django);
  const ttsService = createTtsService();

  const discord = await startDiscord({
    token: cfg.discord.token,
    djangoClient,
    ttsService,
  });

  const shutdown = async (signal) => {
    console.log(`[shutdown] ${signal}`);
    try {
      await discord.stop();
    } finally {
      process.exit(0);
    }
  };

  process.on('SIGINT', () => void shutdown('SIGINT'));
  process.on('SIGTERM', () => void shutdown('SIGTERM'));
}

main().catch((err) => {
  console.error('[fatal]', err);
  process.exit(1);
});
