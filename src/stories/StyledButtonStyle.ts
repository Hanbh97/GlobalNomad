import styled, { css } from "styled-components";

type ButtonSize = "small" | "medium" | "large";

interface StyledButtonElementProps {
  $isPrimary: boolean;
  $size: ButtonSize;
}

const sizeStyles = {
  small: css`
    font-size: 12px;
    padding: 8px 16px;
  `,
  medium: css`
    font-size: 14px;
    padding: 10px 20px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
  `,
};

export const StyledButtonElement = styled.button<StyledButtonElementProps>`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1;
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;

  ${({ $size }) => sizeStyles[$size]}

  ${({ $isPrimary }) =>
    $isPrimary
      ? css`
          background-color: #1ea7fd;
          color: #ffffff;

          &:hover {
            background-color: #0d8ddb;
          }
        `
      : css`
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
          color: #333333;

          &:hover {
            background-color: rgba(0, 0, 0, 0.05);
          }
        `}

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
  }
`;
