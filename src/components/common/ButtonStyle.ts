import styled, { css } from "styled-components";
import ButtonProps from "./ButtonType";

const StyledButton = styled.button<ButtonProps>`
  /* 디폴트 */
  display: flex;
  font-family: "Pretendard";
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  /* variant, size에 따른 스타일 */

  /* size */
  // lg
  ${({ variant, size }) =>
    size === "lg" &&
    css`
      width: ${variant === "text" ? "fit-content" : "342px"};
      min-width: ${variant === "text" ? "115px" : "auto"};
      gap: ${variant === "text" ? "8px" : "4px"};
      height: 54px;
      border-radius: 16px;
      justify-content: center;
      font-size: 16px;
      font-weight: ${variant === "primary" ? 700 : 500};
      letter-spacing: -0.4px;
    `}

  // md
    ${({ variant, size }) =>
    size === "md" &&
    css`
      width: ${variant === "text" ? "fit-content" : "342px"};
      min-width: ${variant === "text" ? "115px" : "auto"};
      gap: ${variant === "text" ? "8px" : "4px"};
      height: 48px;
      border-radius: 14px;
      font-size: 16px;
      font-weight: ${variant === "primary" ? 700 : 500};
      letter-spacing: -0.4px;
    `}

    // sm
    ${({ variant, size }) =>
    size === "sm" &&
    css`
      width: ${variant === "text" ? "fit-content" : "342px"};
      min-width: ${variant === "text" ? "115px" : "auto"};
      gap: ${variant === "text" ? "8px" : "4px"};
      height: ${variant === "secondary" ? "34px" : "41px"};
      border-radius: 12px;
      font-size: 14px;
      letter-spacing: -0.35px;
    `}

    /* padding */
    // 버튼 타입 primary일 때
    ${({ variant, size }) =>
    variant === "primary" &&
    css`
      padding: ${size === "sm" ? "12px 40px" : "14px 40px"};
    `}

    // 버튼 타입 secondary일 때 → 3개로 나뉘어져 삼항연산자 사용
    ${({ variant, size }) =>
    variant === "secondary" &&
    css`
      padding: ${size === "lg"
        ? "12px 40px"
        : size === "md"
          ? "14px 40px"
          : "4px 20px"};
    `} 


    // 버튼 타입 text일 때
    ${({ variant, size }) =>
    variant === "text" &&
    css`
      padding: ${size === "md" ? "14px 40px 14px 20px" : "12px 40px 12px 20px"};
    `}

    /* variant */
    // primary → normal/disabled 상태만 존재
    ${({ variant }) =>
    variant === "primary" &&
    css`
      background: var(--primary-500);
      color: var(--color-white);
      border: none;

      &:disabled {
        background: var(--gray-200);
        color: var(--gray-50);
        cursor: not-allowed;
      }
    `}

    // secondary → normal/active/disabled 상태 존재
    ${({ variant, size }) =>
    variant === "secondary" &&
    css`
      background: var(--color-white);
      color: #efd118;
      border: 1px solid var(--gray-200);

      svg {
        width: ${size === "lg" ? "24px" : size === "md" ? "20px" : "16px"};
        height: ${size === "lg" ? "24px" : size === "md" ? "20px" : "16px"};
        flex-shrink: 0;
        aspect-ratio: 1/1;
        color: #3c1e1e;
      }

      &:active {
        background: #012155;
        color: #efd118;
        border: none;
        svg {
          color: #3c1e1e;
        }
      }

      &:disabled {
        background: var(--color-white);
        color: var(--gray-200);
        border: 1px solid var(--gray-200);
        cursor: not-allowed;
        svg {
          color: #84858c;
        }
      }
    `}
    
    // text → normal/active 상태만 존재
    ${({ variant, size }) =>
    variant === "text" &&
    css`
      background: none;
      color: var(--gray-500);
      border: none;
      justify-content: flex-start;

      svg {
        width: ${size === "lg" ? "24px" : size === "md" ? "20px" : "16px"};
        height: ${size === "lg" ? "24px" : size === "md" ? "20px" : "16px"};
        flex-shrink: 0;
        fill: var(--gray-500);
      }

      &:active {
        background: var(--primary-100);
        color: #1f1f22;
        svg {
          color: #3d9ef2;
        }
      }
    `}
`;

export default StyledButton;
