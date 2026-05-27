import HeaderUserMenu from "./HeaderUserMenu";
import HeaderGuestMenu from "./HeaderGuestMenu";

import * as S from "./style";

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
    <S.Container>
      <S.Inner>
        <S.LogoLink href="/">
          <S.VerticalLogo alt="로고" width={174} height={28} />
          <S.SymbolLogo alt="로고" width={28} height={28} />
        </S.LogoLink>
        <nav>
          {isLoggedIn ? <HeaderUserMenu user={user} /> : <HeaderGuestMenu />}
        </nav>
      </S.Inner>
    </S.Container>
  );
}
