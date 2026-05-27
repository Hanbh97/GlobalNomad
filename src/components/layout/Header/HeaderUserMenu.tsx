"use client";

import type { User } from "./Header";
import DefaultProfileImage from "@/assets/images/default-profile.svg";

import * as S from "./style";

type UserProps = {
  user: User;
};

export default function HeaderUserMenu({ user }: UserProps) {
  // Todo: 드롭다운 컴포넌트 생성 후 기능 구현
  // const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  // const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <S.UserMenuWrapper>
      <S.NotificationButton>
        <S.NotificationIcon />
      </S.NotificationButton>
      <S.Line />
      <S.HeaderUserProfile>
        {/* Todo: api 연결 작업 후 수정 */}
        {user.profileImageUrl ? (
          <S.ProfileImage
            src={user.profileImageUrl}
            alt="프로필 이미지"
            width={30}
            height={30}
          />
        ) : (
          <DefaultProfileImage width={30} height={30} />
        )}
        <S.UserName>{user.nickname}</S.UserName>
      </S.HeaderUserProfile>
    </S.UserMenuWrapper>
  );
}
