import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "onlyText" | "socialIcon" | "userIcon";
  size?: "lg" | "md" | "sm";
}
