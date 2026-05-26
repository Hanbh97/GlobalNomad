"use client";

import DefaultProfileImage from "@/assets/images/default-profile.svg";

import * as S from "./Header.style";

export default function HeaderUserMenu() {
  // Todo: 드롭다운 컴포넌트 생성 후 기능 구현
  // const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  // const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <S.HeaderUserMenu>
      <S.NotificationButton>
        <S.NotificationIcon />
      </S.NotificationButton>
      <S.Line />
      <S.HeaderUserProfile>
        {/* Todo: api 연결 작업 후 수정 */}
        <DefaultProfileImage width={30} height={30} />
        <S.UserName>정만철</S.UserName>
      </S.HeaderUserProfile>
    </S.HeaderUserMenu>
  );
}
