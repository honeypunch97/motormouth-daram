import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function TermsPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <div className="mb-4">
        <Button variant="outline" onClick={() => navigate(-1)}>
          ← 돌아가기
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">이용약관</CardTitle>
          <p className="text-sm text-muted-foreground">최종 수정일: 2025년 12월</p>
        </CardHeader>
        <CardContent className="space-y-6 prose prose-sm max-w-none dark:prose-invert">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. 서비스 개요</h2>
            <p>
              수다쟁이다람씨(이하 "본 서비스")는 Discord 서버에서 텍스트를 음성으로 변환해 읽어주는 TTS(Text-to-Speech) 봇 관리 서비스입니다. 본
              서비스는 무료로 제공되며, 사용자는 Discord 계정을 통해 로그인하여 이용할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. 회원 가입 및 탈퇴</h2>
            <p>
              회원 가입은 Discord OAuth 인증을 통해 자동으로 이루어집니다. 사용자는 언제든지 서비스 내 설정을 통해 탈퇴할 수 있으며, 탈퇴 시 모든 개인
              정보는 즉시 삭제됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. 금지 행위</h2>
            <p>사용자는 본 서비스를 이용함에 있어 다음 행위를 해서는 안 됩니다:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>불법적이거나 부적절한 콘텐츠를 TTS로 재생하는 행위</li>
              <li>서비스의 정상적인 운영을 방해하는 행위</li>
              <li>다른 사용자의 권리를 침해하는 행위</li>
              <li>서비스를 악용하거나 과도하게 사용하는 행위</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. 책임의 제한</h2>
            <p>
              본 서비스는 무료로 제공되며, 서비스의 정확성, 신뢰성, 가용성에 대해 어떠한 보증도 하지 않습니다. 서비스 이용으로 인해 발생하는 손해에
              대해 운영자는 책임을 지지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. 약관의 변경</h2>
            <p>
              운영자는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지를 통해 고지됩니다. 변경된 약관에 동의하지 않는 경우,
              사용자는 서비스 이용을 중단하고 탈퇴할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. 문의</h2>
            <p>본 약관에 대한 문의사항이 있으시면 Discord 서버 또는 GitHub 이슈를 통해 연락 주시기 바랍니다.</p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
