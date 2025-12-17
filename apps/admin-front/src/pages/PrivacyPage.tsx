import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function PrivacyPage() {
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
          <CardTitle className="text-3xl">개인정보처리방침</CardTitle>
          <p className="text-sm text-muted-foreground">최종 수정일: 2025년 12월</p>
        </CardHeader>
        <CardContent className="space-y-6 prose prose-sm max-w-none dark:prose-invert">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. 개인정보 수집 항목</h2>
            <p>본 서비스는 Discord OAuth 인증을 통해 다음 정보를 수집합니다:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Discord 사용자 ID</li>
              <li>Discord 사용자 이름 및 태그</li>
              <li>Discord 프로필 이미지</li>
              <li>이메일 주소 (Discord에서 제공하는 경우)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. 개인정보 이용 목적</h2>
            <p>수집된 개인정보는 다음 목적으로만 이용됩니다:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>서비스 제공 및 사용자 인증</li>
              <li>사용자별 TTS 설정(음색, 언어 등) 저장</li>
              <li>Discord 서버(길드)별 봇 설정 관리</li>
              <li>서비스 이용 통계 및 개선</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. 개인정보 보유 및 이용 기간</h2>
            <p>
              개인정보는 서비스 이용 기간 동안 보유되며, 사용자가 탈퇴를 요청하는 경우 즉시 삭제됩니다. 다만, 법령에 따라 보존이 필요한 경우 해당 기간
              동안 보관될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. 개인정보 제3자 제공</h2>
            <p>본 서비스는 사용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우는 예외로 합니다:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>사용자의 사전 동의가 있는 경우</li>
              <li>법령에 따라 요구되는 경우</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. 개인정보 처리 위탁</h2>
            <p>본 서비스는 원활한 서비스 제공을 위해 다음 업체에 개인정보 처리를 위탁합니다:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Discord (사용자 인증 및 OAuth)</li>
              <li>Google Cloud Platform (TTS 음성 합성)</li>
              <li>클라우드 호스팅 업체 (서버 운영)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. 사용자의 권리</h2>
            <p>사용자는 언제든지 다음 권리를 행사할 수 있습니다:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>개인정보 열람 요구</li>
              <li>개인정보 수정 및 삭제 요구</li>
              <li>개인정보 처리 정지 요구</li>
              <li>서비스 탈퇴 및 개인정보 삭제</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. 개인정보 보호책임자</h2>
            <p>개인정보 보호와 관련한 문의사항이 있으시면 Discord 서버 또는 GitHub 이슈를 통해 연락 주시기 바랍니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. 방침의 변경</h2>
            <p>본 개인정보처리방침은 법령 및 서비스 정책 변경에 따라 수정될 수 있으며, 변경 시 서비스 내 공지를 통해 고지됩니다.</p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
