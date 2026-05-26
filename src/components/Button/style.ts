import styled, { css } from "styled-components";
import ButtonProps from "./type";

const StyledButton = styled.button<ButtonProps>`
  /* 디폴트 = type: primary, size: lg, state: normal */
  display: flex;
  width: 342px;
  height: 54px;
  background: var(--primary-500);
  color: var(--color-white);
  font-family: "Pretendard";
  font-weight: 700;
  gap: 4px;
  align-items: center;

  /* variant, size에 따른 스타일 */

  /* size */
  // lg
  ${({ variant, size }) =>
    size === "lg" &&
    css`
      width: ${variant === "text" ? "115px" : "342px"};
      gap: ${variant === "text" ? "8px" : "4px"};
      height: 54px;
      border-radius: 16px;
      justify-content: center;
    `}

  // md
    ${({ variant, size }) =>
    size === "md" &&
    css`
      width: ${variant === "text" ? "115px" : "342px"};
      gap: ${variant === "text" ? "8px" : "4px"};
      height: 48px;
      border-radius: 14px;
      justify-content: center;
    `}

    // sm
    ${({ variant, size }) =>
    size === "sm" &&
    css`
      width: ${variant === "text" ? "115px" : "342px"};
      gap: ${variant === "text" ? "8px" : "4px"};
      height: ${variant === "secondary" ? "34px" : "41px"};
      border-radius: 12px;
    `}

    /* padding */
    // 버튼 타입이 primary일 때
    ${({ variant, size }) =>
    variant === "primary" &&
    css`
      padding: ${size === "sm" ? "12px 40px" : "14px 40px"};
    `}

    // 버튼 타입이 secondary일 때 → 3개로 나뉘어져 삼항연산자 사용
    ${({ variant, size }) =>
    variant === "secondary" &&
    css`
      padding: ${size === "lg"
        ? "12px 40px"
        : size === "md"
          ? "14px 40px"
          : "4px 20px;"};
    `} 


    // 버튼 타입이 text일 때
    ${({ variant, size }) =>
    variant === "text" &&
    css`
      padding: ${size === "md" ? "14px 40px 14px 20px" : "12px 40px 12px 20px"};
    `}
`;

export default StyledButton;
