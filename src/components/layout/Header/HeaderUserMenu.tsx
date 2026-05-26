"use client";

import { useState } from "react";
import Image from "next/image";

import DefaultProfileImage from "@/assets/images/default-profile.svg";
import BellIcon from "@/assets/icons/bell.svg";

import * as S from "./Header.style";

export default function HeaderUserMenu() {
  // Todo: 드롭다운 컴포넌트 생성 후 기능 구현
  // const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  // const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <S.HeaderUserMenu>
      <S.NotificationButton>
        <Image src={BellIcon} alt="알림" width={24} height={24} />
      </S.NotificationButton>
      <S.Line />
      <S.HeaderUserProfile>
        <Image
          src={DefaultProfileImage}
          alt="프로필 이미지"
          width={30}
          height={30}
        />
        <S.UserName>정만철</S.UserName>
      </S.HeaderUserProfile>
    </S.HeaderUserMenu>
  );
}
