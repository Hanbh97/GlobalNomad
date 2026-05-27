import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "kakao" | "user";
  size?: "lg" | "md" | "sm";
}
