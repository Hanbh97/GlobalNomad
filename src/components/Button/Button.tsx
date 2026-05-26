import React from "react";
import StyledButton from "./style";
import ButtonProps from "./type";
import { Kakao as KakaologinIcon } from "@/constants/icons";
import { User as UserIcon } from "@/constants/icons";

// Button 컴포넌트 기본값: 타입 primary, 사이즈 lg로 설정
const Button = ({
  children,
  variant = "primary",
  size = "lg",
  ...restProps
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} {...restProps}>
      {/* 버튼 타입이 secondary이면 구글/카카오 간편로그인 아이콘 보이게 */}
      {variant === "secondary" && <KakaologinIcon />}
      {/* 버튼 타입이 text이면 유저 아이콘 보이게 */}
      {variant === "text" && <UserIcon />}
      {children}
    </StyledButton>
  );
};

export default Button;
