import process from "node:process";

export function getConfig() {
  const PORT = Number(process.env.PORT ?? 3000);
  if (!Number.isFinite(PORT) || PORT <= 0) {
    throw new Error("Invalid PORT. Expected a positive number.");
  }

  return {
    port: PORT,
    discord: {
      token: process.env.DISCORD_TOKEN ?? "",
      clientId: process.env.DISCORD_CLIENT_ID ?? "",
    },
    google: {
      applicationCredentials: process.env.GOOGLE_APPLICATION_CREDENTIALS ?? "",
    },
    django: {
      baseUrl: process.env.DJANGO_API_BASE_URL ?? "",
      token: process.env.DJANGO_API_TOKEN ?? "",
    },
  };
}


