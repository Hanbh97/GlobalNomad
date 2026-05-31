import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleVariant?:
    | "fillNone"
    | "fillWhite"
    | "fillPrimaryBlue"
    | "fillGray50"
    | "fillGray200"
    | "fillGray300"
    | "kakaoButton"
    | "iconButton"
    | "sidemenuStyle"
    | "reservationChange"
    | "reservationCancel";

  size?: "lg" | "md" | "sm";
  setIcon?: ReactNode;
  iconPosition?: "left" | "center";
}
