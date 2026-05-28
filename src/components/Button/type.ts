import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "center" | "start";
  size?: "lg" | "md" | "sm";
  icon?: ReactNode;
}
