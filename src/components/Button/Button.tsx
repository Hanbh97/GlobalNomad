import React from "react";
import StyledButton from "./style";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text";
  size?: "lg" | "md" | "sm";
}

// restProps에 onClick, disable 등 React.HTMLAttributes<HTMLButtonElement>에서 제공하는 props들을 모두 넣기 위해 구조분해할당 처리
const Button = ({ children, ...restProps }: ButtonProps) => {
  return <StyledButton {...restProps}>{children}</StyledButton>;
};

export default Button;
