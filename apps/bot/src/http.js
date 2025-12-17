import express from "express";

export function startHttp({ port }) {
  const app = express();

  app.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  app.get("/status", (_req, res) => {
    const mem = process.memoryUsage();
    res.json({
      ok: true,
      uptimeSec: Math.floor(process.uptime()),
      memory: {
        rss: mem.rss,
        heapUsed: mem.heapUsed,
        heapTotal: mem.heapTotal,
      },
    });
  });

  app.listen(port, () => {
    console.log(`[http] listening on :${port}`);
  });
}


