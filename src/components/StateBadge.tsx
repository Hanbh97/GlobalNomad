"use client";

import styled from "styled-components";

export type ReservationStatus =
  | "pending"
  | "confirmed"
  | "declined"
  | "canceled"
  | "completed";

interface StateBadgeProps {
  status: ReservationStatus;
}

const STATUS_MAP = {
  pending: {
    label: "예약 승인",
    color: "#1790A0",
    bgColor: "#DDF9F9",
  },
  confirmed: {
    label: "예약 완료",
    color: "#2BA90D",
    bgColor: "#E9FBE4",
  },
  declined: {
    label: "예약 거절",
    color: "#F96767",
    bgColor: "#FCECEA",
  },
  canceled: {
    label: "예약 취소",
    color: "var(--gray-600)",
    bgColor: "var(--gray-100)",
  },
  completed: {
    label: "체험 완료",
    color: "#0D6CD1",
    bgColor: "#DAF0FF",
  },
} as const;

export default function StateBadge({ status }: StateBadgeProps) {
  const state = STATUS_MAP[status];

  return (
    <Badge color={state.color} bgColor={state.bgColor}>
      {state.label}
    </Badge>
  );
}

const Badge = styled.span<{
  color: string;
  bgColor: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;
  border-radius: 999px;

  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};

  font-size: "var(--text-13)";
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 1;
  cursor: default;
`;
