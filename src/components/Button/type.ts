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

  /*
  lg, md, sm 외 모달, 예약내역 카드 등의 라벨 등 여러 곳에서 활용되어 h29, h50 추가
  * 기존 옵셔널 방식에서 heightSize를 넘기지 않을 시 버튼이 네모로 나오는 문제로
  * 옵셔널 제거 및 heightSize에 각 사이즈별 rounded 지정
  * 
  * 높이 54, 47, 41, 29, 50을 제외한 나머지 및 여러가지 사이즈에 설정을 className으로 주기 위해 custom 추가
  */
  heightSize: "lg54" | "md47" | "sm41" | "h29" | "h50" | "custom"; //
  iconPosition?: "left" | "center";
}
