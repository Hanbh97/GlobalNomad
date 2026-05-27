import Link from "next/link";

import HeaderUserMenu from "./HeaderUserMenu";
import HeaderGuestMenu from "./HeaderGuestMenu";

import LogoVertical from "@/assets/images/logo-vertical.svg";
import LogoSymbol from "@/assets/images/logo-symbol.svg";

export type User = {
  id: number;
  nickname: string;
  profileImageUrl?: string;
};

type UserProps = {
  user?: User | null;
};

export default function Header({ user }: UserProps) {
  // Todo: 로그인 기능 완료 후 수정
  const isLoggedIn = !!user;

  return (
    <header className="w-full h-12 fixed top-0 left-0 z-999 md:h-20 ">
      <div className="w-full max-w-380 h-full flex items-center justify-between mx-auto px-6 py-6 md:px-7.5">
        <Link href="/" className="flex items-center py-2.5 cursor-pointer">
          <LogoVertical
            alt="로고"
            width={174}
            height={28}
            className="hidden md:block"
          />
          <LogoSymbol
            alt="로고"
            width={28}
            height={28}
            className="block md:hidden"
          />
        </Link>
        <nav>
          {isLoggedIn ? <HeaderUserMenu user={user} /> : <HeaderGuestMenu />}
        </nav>
      </div>
    </header>
  );
}
