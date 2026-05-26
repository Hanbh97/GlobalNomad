import Link from "next/link";

import LogoVertical from "@/assets/images/logo-vertical.svg";
import LogoSymbol from "@/assets/images/logo-symbol.svg";
import BellIcon from "@/assets/icons/bell.svg";

import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 48px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

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

export const VerticalLogo = styled(LogoVertical)`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const SymbolLogo = styled(LogoSymbol)`
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

export const HeaderUserMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const NotificationButton = styled.button`
  padding: 8px;
  border-radius: 8px;
  color: var(--gray-600);

  &:hover {
    background-color: var(--gray-25);
    color: var(--gray-800);
  }
`;

export const NotificationIcon = styled(BellIcon)`
  width: 24px;
  height: 24px;
`;

export const Line = styled.div`
  width: 1px;
  height: 14px;
  background-color: var(--gray-100);
`;

export const HeaderUserProfile = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 8px;
  border-radius: 8px;

  &:hover {
    background-color: var(--gray-25);
  }
`;

export const UserName = styled.span`
  font-size: var(--text-14);
  font-weight: 500;
  color: var(--gray-950);
`;
