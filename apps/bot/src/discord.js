import { Client, GatewayIntentBits, Partials } from 'discord.js';
import { createMessageCreateHandler } from './handlers/messageCreate.js';

export async function startDiscord({ token, djangoClient, ttsService }) {
  if (!token) {
    throw new Error('DISCORD_TOKEN is missing.');
  }

  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildVoiceStates,
      // 메시지 내용을 읽으려면 필요(봇 설정에서도 Message Content Intent 활성화 필요)
      GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel],
  });

  client.once('clientReady', () => {
    console.log(`[discord] ready as ${client.user?.tag}`);
  });

  const onMessageCreate = createMessageCreateHandler({ djangoClient, ttsService });
  client.on('messageCreate', (msg) => {
    onMessageCreate(msg).catch((err) => {
      console.error('[discord] messageCreate handler error:', err);
    });
  });

  await client.login(token);

  return {
    client,
    async stop() {
      client.destroy();
    },
  };
}
