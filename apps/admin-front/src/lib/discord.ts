export function getDiscordOAuthUrl(): string {
  const clientId = import.meta.env.VITE_DISCORD_CLIENT_ID ?? '';
  const redirectUri = import.meta.env.VITE_DISCORD_REDIRECT_URI ?? '';

  if (!clientId) {
    console.warn('[discord] VITE_DISCORD_CLIENT_ID is missing.');
  }
  if (!redirectUri) {
    console.warn('[discord] VITE_DISCORD_REDIRECT_URI is missing.');
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'identify email',
  });

  return `https://discord.com/oauth2/authorize?${params.toString()}`;
}

