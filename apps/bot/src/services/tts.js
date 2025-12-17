export function createTtsService() {
  async function speakTextToVoiceChannel({
    guildId,
    voiceChannelId,
    text,
    voice,
  }) {
    // TODO: Google Cloud TTS + @discordjs/voice 재생 구현
    // 지금은 뼈대만: 실제 음성 재생은 이후 단계에서 붙입니다.
    console.log("[tts] stub", {
      guildId,
      voiceChannelId,
      textPreview: String(text).slice(0, 50),
      voice,
    });
  }

  return {
    speakTextToVoiceChannel,
  };
}


