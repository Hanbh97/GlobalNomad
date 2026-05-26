import React from "react";
import ButtonProps from "./ButtonType";
import StyledButton from "./ButtonStyle";
import KakaologinIcon from "@/assets/icons/kakao"; // tsx로 만든 카카오아이콘 임포트
import UserIcon from "@/assets/icons/user.svg";

// Button 컴포넌트 기본값: 타입 primary, 사이즈 lg로 설정
const Button = ({
  children,
  variant = "primary",
  size = "lg",
  ...restProps
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} {...restProps}>
      {/* 버튼 타입이 secondary이면 카카오/구글 간편로그인 아이콘 보이게 */}
      {variant === "secondary" && <KakaologinIcon />}
      {/* 버튼 타입이 text이면 유저 아이콘 보이게 */}
      {variant === "text" && <UserIcon />}
      {children}
    </StyledButton>
  );
};

export default Button;
