"use client";

import { Kakao as KakaoIcon } from "@/constants/icons";
import { ButtonProps } from "./type";

const based = `flex items-center 
  disabled:cursor-not-allowed disabled:opacity-70 
  [&_svg]:shrink-0 [&_svg]:aspect-square`;

const variantStyle: { [key: string]: string } = {
  fillNone: `bg-transparent
  text-gray-600 font-medium tracking-[-0.1px]
  active:bg-primary-100 active:text-gray-950
  [&_svg]:text-gray-600 active:[&_svg]:text-primary-500`,

  fillWhite: `bg-white
  border-2 border-gray-200 
  text-gray-600 
  active:bg-gray-25 active:text-gray-800
  disabled:bg-gray-200 disabled:text-gray-50`,

  fillPrimaryBlue: `bg-primary-500 
  text-white font-bold tracking-[0.1px]
  active:bg-[#2b8de0] active:text-white
  disabled:bg-gray-200 disabled:text-gray-50
  disabled:[&_svg]:text-gray-400`,

  fillGray50: `bg-gray-50  
  text-gray-500 font-medium tracking-[-0.35px] 
  active:bg-[#F5FAFF] active:shadow-[inset_0_0_0_2px_#e5f3ff] active:text-[#213448]
  disabled:bg-white disabled:text-gray-200 disabled:border-gray-200
  disabled:[&_svg]:text-gray-500`,

  fillGray200: `bg-gray-200
  text-white font-bold tracking-[-0.1px] 
  active:bg-gray-100 active:bg-gray-300 active:text-white
  disabled:bg-gray-100 disabled:text-gray-300 disabled:[&_svg]:text-gray-300`,

  fillGray300: `bg-gray-300
  text-gray-50 font-bold tracking-[-0.1px]
  active:bg-gray-400 active:text-gray-50
  disabled:bg-gray-100 disabled:text-gray-300
  disabled:[&_svg]:text-gray-300`,

  kakaoButton: `bg-white text-[#E8D800] border-2 border-[#FFF9A3]
      [&_svg]:text-[#3c1e1e]
      active:bg-white active:border active:border-[#e6cf00]
      disabled:bg-white disabled:text-gray-200 disabled:border-gray-200
      disabled:[&_svg]:text-gray-500`,

  sidemenuStyle: `bg-transparent text-gray-600 [&_svg]:text-gray-600 border border-primary-100`,

  reservationChange: `bg-white border-2 border-gray-50 text-gray-600 font-medium tracking-[-0.35px] rounded-lg`,

  reservationCancel: `bg-gray-50 text-gray-600 text-sm font-medium tracking-[-0.35px] rounded-lg`,
};

const sizeStyle: { [key: string]: string } = {
  lg54: `h-[54px] rounded-2xl text-base [&_svg]:size-6`,
  md47: `h-[47px] rounded-[14px] text-base [&_svg]:size-5`,
  sm41: `h-[41px] rounded-xl text-sm [&_svg]:size-6`,
};

const iconJustify = {
  left: {
    lg54: `justify-start py-3 pr-10 pl-5 gap-2`,
    md47: `justify-start py-3.5 pr-10 pl-5 gap-2`,
    sm41: `justify-start py-3 px-10 pl-5 gap-[6px]`,
  },
  center: {
    lg54: `justify-center py-3 px-10 gap-1`,
    md47: `justify-center py-[14px] px-10 gap-1`,
    sm41: `justify-center py-1 px-5`,
  },
};

const Button = ({
  styleVariant,
  heightSize,
  setIcon,
  iconPosition,
  className,
  ...restProps
}: ButtonProps) => {
  const { children, ...restDefaultButtonAttributes } = restProps;
  const iconStatusValue =
    styleVariant === "kakaoButton" ? <KakaoIcon /> : setIcon;
  const isIconWhere = iconPosition ?? (iconStatusValue ? "center" : undefined);

  return (
    <button
      className={[
        based,
        styleVariant ? variantStyle[styleVariant] : null, // styleVariant 미지정시 className으로 버튼 스타일 커스텀 할 수 있도록 null 설정
        heightSize ? sizeStyle[heightSize] : null, //  heightSize(lg54, md47, sm41) 미지정 시 className으로 버튼 사이즈 커스텀 할 수 있도록 null 설정
        isIconWhere && heightSize
          ? iconJustify[isIconWhere][heightSize]
          : isIconWhere && !heightSize
            ? "justify-center"
            : "justify-center px-3.5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...restDefaultButtonAttributes}
    >
      {iconStatusValue}
      {children}
    </button>
  );
};

export default Button;
