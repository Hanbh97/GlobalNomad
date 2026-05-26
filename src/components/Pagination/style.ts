import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ArrowButton = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    opacity 0.2s ease,
    transform 0.15s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: scale(0.9);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  &:disabled {
    opacity: 0.4;
    cursor: pointer;
  }
`;

export const PageButton = styled.button<{ active: boolean }>`
  width: 40px;
  height: 40px;

  position: relative;

  font-size: var(--text-14);
  font-weight: ${({ active }) => (active ? "700" : "500")};

  color: ${({ active }) => (active ? "var(--gray-950)" : "var(--gray-400)")};

  transition:
    color 0.2s ease,
    font-weight 0.2s ease,
    transform 0.15s ease;

  &:hover {
    color: var(--gray-950);
  }

  &:active {
    transform: scale(0.92);
  }

  &::after {
    content: "";

    position: absolute;
    bottom: -4px;
    left: 0;

    width: ${({ active }) => (active ? "100%" : "0")};
    height: 2px;

    background-color: ${({ active }) =>
      active ? "var(--primary-500)" : "transparent"};

    transition:
      width 0.25s ease,
      background-color 0.25s ease;
  }

  &:hover::after {
    width: 100%;
    background-color: ${({ active }) =>
      active ? "var(--primary-500)" : "rgba(61, 158, 242, 0.5)"};
  }
`;

export const LeftIcon = styled(Image)`
  transform: rotate(90deg);
`;

export const RightIcon = styled(Image)`
  transform: rotate(-90deg);
`;
