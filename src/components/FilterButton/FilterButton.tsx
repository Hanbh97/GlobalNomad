"use client";

import { twMerge } from "tailwind-merge";
import { FilterButtonProps } from "./type";

const FilterButton = ({
  children,
  size = "pc/tb",
  icon,
  isActive = false,
  className,
  ...restProps
}: FilterButtonProps) => {
  const padding = size === "pc/tb" ? "py-[10px] px-4" : "py-[10px] px-[14px]";
  const gap = size === "pc/tb" ? "gap-[6px]" : "gap-1";
  const iconSize = size === "pc/tb" ? "[&_svg]:size-6" : "[&_svg]:size-4";
  const fontSize = size === "pc/tb" ? "text-base" : "text-sm";
  const fontWeight = isActive === true ? "font-bold" : "font-medium";
  const letterSpacing =
    size === "pc/tb" ? "tracking-[-0.4px]" : "tracking-[-0.35px]";

  const stateStyle = isActive
    ? "bg-[#333] text-white [&_svg]:text-white border-none"
    : "bg-white text-gray-950 [&_svg]:text-black border border-[#D8D8D8]";

  return (
    <button
      className={twMerge(
        `inline-flex justify-center items-center rounded-full whitespace-nowrap
        [&_svg]:shrink-0 [&_svg]:aspect-square
        disabled:cursor-not-allowed disabled:opacity-70
        ${padding} ${gap} ${iconSize} ${fontSize} ${fontWeight} ${letterSpacing} ${stateStyle}
        `,
        className,
      )}
      {...restProps}
    >
      {icon}
      {children}
    </button>
  );
};

export default FilterButton;
