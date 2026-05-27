"use client";

import { ButtonProps } from "./type";
import { Kakao as KakaoIcon } from "@/constants/icons";
import { User as UserIcon } from "@/constants/icons";

const Button = ({
  children,
  variant,
  size = "lg",
  ...restProps
}: ButtonProps) => {
  // 버튼 종류, 사이즈별 속성 테일윈드 변수로 체인지
  const width = variant === "user" ? "w-fit" : "w-85.5";
  const height = {
    lg: `h-13.5`,
    md: `h-12`,
    sm: `${variant === "social" ? "h-8.5" : "h-10.3"}`,
  }[size];
  const minWidth = variant === "user" ? "min-w-28.75" : "min-w-auto";
  const gap = variant === "user" ? "gap-2" : "gap-1";
  const radius =
    size === "lg"
      ? "rounded-2xl"
      : size === "sm"
        ? "rounded-xl"
        : "rounded-[14px]";
  const fontSize = size === "sm" ? "text-sm" : "text-base";
  const fontWeight = !variant ? "font-bold" : "font-medium";
  const letterSpacing =
    variant === "user" ? "tracking-[-0.35px]" : "tracking-[-0.4px]";

  const padding =
    {
      social:
        size === "lg"
          ? "py-3 px-10"
          : size === "md"
            ? "py-3.5 px-10"
            : "py-1 px-5",
      user: size === "md" ? "py-3.5 pr-10 pl-5" : "py-3 pr-10 pl-5",
    }[variant!] ?? (size === "sm" ? "py-3 px-10" : "py-3.5 px-10");

  const state =
    {
      social: `bg-white text-[#e6cf00] border border-gray-200
    [&_svg]:text-[#3c1e1e] [&_svg]:shrink-0 [&_svg]:aspect-square
    ${size === "lg" ? "[&_svg]:size-6" : size === "md" ? "[&_svg]:size-5" : "[&_svg]:size-4"}
    active:bg-white active:text-[#3c1e1e] active:border-1.7 active:border-[#e6cf00] active:[&_svg]:text-[#3c1e1e]
    disabled:bg-white disabled:text-gray-200 disabled:border disabled:border-gray-200 disabled:cursor-not-allowed disabled:[&_svg]:text-gray-500`,
      user: `bg-transparent text-[#1f1f22] border-none justify-start
    ${size === "lg" ? "[&_svg]:size-6" : size === "md" ? "[&_svg]:size-5" : "[&_svg]:size-4"} [&_svg]:text-gray-500 [&_svg]:shrink-0
    active:bg-primary-100 active:text-[#1f1f22] active:[&_svg]:text-primary-500`,
    }[variant!] ??
    `bg-primary-500 text-white border-none
  active:bg-[#2b8de0]
  disabled:bg-gray-200 disabled:text-gray-50 disabled:cursor-not-allowed`;

  return (
    <button
      className={`flex justify-center items-center 
        ${width} ${height} ${minWidth} ${gap} ${padding} ${radius} ${fontSize} ${fontWeight} ${letterSpacing} ${state}`}
      {...restProps}
    >
      {variant === "social" && <KakaoIcon />}
      {variant === "user" && <UserIcon />}
      {children}
    </button>
  );
};

export default Button;
