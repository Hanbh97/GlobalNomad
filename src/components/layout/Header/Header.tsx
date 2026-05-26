import Image from "next/image";
import Link from "next/link";

import LogoVertical from "@/assets/images/logo-vertical.svg";
import LogoSymbol from "@/assets/images/logo-symbol.svg";
import BellIcon from "@/assets/icons/bell.svg";
import styled from "styled-components";

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
    <Container>
      <Inner>
        <LogoLink href="/">
          <VerticalLogo src={LogoVertical} alt="로고" width={174} height={28} />
          <SymbolLogo src={LogoSymbol} alt="로고" width={28} height={28} />
        </LogoLink>
        <nav>
          <HeaderGuestMenu>
            {AUTH_LINKS.map(({ href, text }) => (
              <AuthList key={href}>
                <Link href={href}>{text}</Link>
              </AuthList>
            ))}
          </HeaderGuestMenu>
          {/* <HeaderUserMenu>
          <li>
            <button>
              <Image src={BellIcon} alt="알림" width={24} height={24} />
            </button>
          </li>
          <div></div>
          <li>
            <button>
              <span>정만철</span>
            </button>
          </li>
        </HeaderUserMenu> */}
        </nav>
      </Inner>
    </Container>
  );
}

export const Container = styled.header`
  width: 100%;
  height: 48px;

  @media (min-width: 768px) {
    height: 80px;
  }
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 1520px;
  height: 100%;

  margin: 0 auto;
  padding: 10px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    height: 80px;
    padding: 0 30px;
  }
`;

export const LogoLink = styled(Link)`
  padding: 10px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const VerticalLogo = styled(Image)`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const SymbolLogo = styled(Image)`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeaderGuestMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const AuthList = styled.li`
  padding: 8px 12px;
  font-size: var(--text-14);
  font-weight: 500;
  color: var(--gray-950);
  border-radius: 4px;

  &:hover {
    color: var(--primary-500);
    cursor: pointer;
  }

  &:active {
    transform: scale(0.97);
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    padding: 12px 16px;
  }
`;

export const HeaderUserMenu = styled.ul``;
