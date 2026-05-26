// Button 컴포넌트 type 따로 정의

import React from "react";

// React.ButtonHTMLAttributes<HTMLButtonElement>에서 onClick, disabled 등 기본 제공되어 variant, size만 추가
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text";
  size?: "lg" | "md" | "sm";
}

export default ButtonProps;
