"use client";

import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./type";

const Button = ({
  children,
  variant,
  size,
  icon,
  className,
  ...restProps
}: ButtonProps) => {
  const width = variant === "start" ? "w-fit" : "w-85.5";
  const height = size
    ? {
        lg: "h-13.5",
        md: "h-12",
        sm: variant === "center" ? "h-8.5" : "h-10.3",
      }[size]
    : "h-auto";
  const minWidth = variant === "start" ? "min-w-28.75" : "min-w-auto";
  const gap = variant === "start" ? "gap-2" : "gap-1";
  const justify = variant === "start" ? "justify-start" : "justify-center";
  const radius =
    size === "sm"
      ? "rounded-xl"
      : size === "md"
        ? "rounded-[14px]"
        : "rounded-2xl";
  const fontSize = size === "sm" ? "text-sm" : "text-base";
  const fontWeight = !variant ? "font-bold" : "font-medium";
  const letterSpacing =
    variant === "start" ? "tracking-[-0.35px]" : "tracking-[-0.4px]";
  const iconSize =
    size === "sm"
      ? "[&_svg]:size-4"
      : size === "md"
        ? "[&_svg]:size-5"
        : "[&_svg]:size-6";
  const padding =
    variant === "center"
      ? size === "lg"
        ? "py-3 px-10"
        : size === "md"
          ? "py-3.5 px-10"
          : "py-1 px-5"
      : variant === "start"
        ? size === "md"
          ? "py-3.5 pr-10 pl-5"
          : "py-3 pr-10 pl-5"
        : size === "sm"
          ? "py-3 px-10"
          : "py-3.5 px-10";
  const state =
    variant === "center"
      ? `bg-white text-[#3c1e1e] border border-gray-200
         [&_svg]:text-[#3c1e1e]
         active:bg-white active:border-1.7 active:border-[#e6cf00]
         disabled:bg-white disabled:text-gray-200 disabled:border-gray-200
         disabled:[&_svg]:text-gray-500`
      : variant === "start"
        ? `bg-transparent text-[#1f1f22] border-none [&_svg]:text-gray-500
           active:bg-primary-100 active:text-[#1f1f22] active:[&_svg]:text-primary-500
           disabled:bg-gray-50 disabled:text-[#1f1f22] disabled:[&_svg]:text-primary-500`
        : `bg-primary-500 text-white border-none
           active:bg-[#2b8de0]
           disabled:bg-gray-200 disabled:text-gray-50`;

  return (
    <button
      className={twMerge(
        `flex items-center [&_svg]:shrink-0 [&_svg]:aspect-square
         disabled:cursor-not-allowed disabled:opacity-70
         ${justify} ${width} ${height} ${minWidth} ${gap} ${padding} ${radius} ${fontSize} ${fontWeight} ${letterSpacing} ${iconSize} ${state}`,
        className,
      )}
      {...restProps}
    >
      {variant ? (
        <>
          {icon}
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
