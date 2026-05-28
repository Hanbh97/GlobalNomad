import { ButtonHTMLAttributes, ReactNode } from "react";

export interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "pc/tb" | "mo";
  icon?: ReactNode;
  isActive?: boolean;
}
