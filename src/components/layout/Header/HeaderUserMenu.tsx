"use client";

import Image from "next/image";
import type { User } from "./Header";
import BellIcon from "@/assets/icons/bell.svg";
import DefaultProfileImage from "@/assets/images/default-profile.svg";

type UserProps = {
  user: User;
};

const HeaderUserMenu = ({ user }: UserProps) => {
  // Todo: 드롭다운 컴포넌트 생성 후 기능 구현
  // const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  // const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex justify-center items-center gap-5">
      <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-25 hover:text-gray-800 active:scale-95 active:opacity-70 transition">
        <BellIcon width={24} height={24} />
      </button>
      <div className="w-px h-3.5 bg-gray-100" />
      <button className="flex justify-center items-center gap-2.5 p-2 rounded-lg hover:bg-gray-25 active:scale-95 active:opacity-70 transition">
        {/* Todo: api 연결 작업 후 수정 */}
        {user.profileImageUrl ? (
          <Image
            src={user.profileImageUrl}
            alt="프로필 이미지"
            width={30}
            height={30}
            className="w-7.5 h-7.5 rounded-full object-cover"
          />
        ) : (
          <DefaultProfileImage width={30} height={30} />
        )}
        <span className="text-14-medium text-gray-950">{user.nickname}</span>
      </button>
    </div>
  );
};

export default HeaderUserMenu;
