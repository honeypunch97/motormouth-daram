export function createDjangoClient({ baseUrl, token }) {
  async function getGuildSettings({ guildId }) {
    // TODO: Django API 스펙 확정 후 구현
    // 예: GET /api/guilds/{guildId}/settings
    // 현재는 "설정 없음"으로 반환(메시지 처리 스텁이 안전하게 무시하게 됨)
    void baseUrl;
    void token;
    void guildId;

    return {
      ttsTextChannelId: null,
    };
  }

  async function getUserVoiceSettings({ guildId, userId }) {
    // TODO: Django API 스펙 확정 후 구현
    void baseUrl;
    void token;
    void guildId;
    void userId;

    return {
      languageCode: "ko-KR",
      voiceName: null,
    };
  }

  return {
    getGuildSettings,
    getUserVoiceSettings,
  };
}


