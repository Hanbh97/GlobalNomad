import Link from "next/link";
import HeaderUserMenu from "./HeaderUserMenu";

import * as S from "./Header.style";

const AUTH_LINKS = [
  {
    href: "/login",
    text: "로그인",
  },
  {
    href: "/signup",
    text: "회원가입",
  },
];

export default function Header() {
  return (
    <S.Container>
      <S.Inner>
        <S.LogoLink href="/">
          <S.VerticalLogo alt="로고" width={174} height={28} />
          <S.SymbolLogo alt="로고" width={28} height={28} />
        </S.LogoLink>
        <nav>
          {/* Todo: 로그인 기능 완료 후 기능 구현 */}
          <S.HeaderGuestMenu>
            {AUTH_LINKS.map(({ href, text }) => (
              <S.AuthList key={href}>
                <Link href={href}>{text}</Link>
              </S.AuthList>
            ))}
          </S.HeaderGuestMenu>
          {/* <HeaderUserMenu /> */}
        </nav>
      </S.Inner>
    </S.Container>
  );
}
