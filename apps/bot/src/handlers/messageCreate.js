export function createMessageCreateHandler({ djangoClient, ttsService }) {
  return async function onMessageCreate(message) {
    // 기본 필터: 봇/웹훅 메시지는 무시
    if (message.author?.bot) return;
    if (message.webhookId) return;

    const guild = message.guild;
    if (!guild) return; // DM 등

    const guildId = guild.id;
    const channelId = message.channel?.id;
    if (!channelId) return;

    // 길드 설정 조회 (스텁: 현재는 설정 없음으로 반환)
    const settings = await djangoClient.getGuildSettings({ guildId });
    if (!settings?.ttsTextChannelId) return;

    // 지정 텍스트 채널에서만 동작
    if (settings.ttsTextChannelId !== channelId) return;

    // 작성자가 보이스 채널에 없으면 "무시"(확정)
    const member = message.member;
    const voiceChannelId = member?.voice?.channelId;
    if (!voiceChannelId) return;

    const userVoice = await djangoClient.getUserVoiceSettings({
      guildId,
      userId: message.author.id,
    });

    const text = String(message.content ?? '').trim();
    if (!text) return;

    await ttsService.speakTextToVoiceChannel({
      guildId,
      voiceChannelId,
      text,
      voice: userVoice,
    });
  };
}
