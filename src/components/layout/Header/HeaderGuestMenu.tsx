import Link from "next/link";
import * as S from "./style";

type AuthLink = { href: string; text: string };

const AUTH_LINKS: AuthLink[] = [
  {
    href: "/login",
    text: "로그인",
  },
  {
    href: "/signup",
    text: "회원가입",
  },
];

export default function HeaderGuestMenu() {
  return (
    <S.GuestMenuWrapper>
      {AUTH_LINKS.map(({ href, text }) => (
        <S.AuthList key={href}>
          <Link href={href}>{text}</Link>
        </S.AuthList>
      ))}
    </S.GuestMenuWrapper>
  );
}
