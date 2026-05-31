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

  heightSize?: "lg54" | "md47" | "sm41";
  setIcon?: ReactNode;
  iconPosition?: "left" | "center";
}
