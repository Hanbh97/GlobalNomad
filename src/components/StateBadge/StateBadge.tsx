"use client";

import Badge from "./style";
import { StateBadgeProps } from "./type";

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

const StateBadge = ({ status }: StateBadgeProps) => {
  const state = STATUS_MAP[status];

  return (
    <Badge color={state.color} bgColor={state.bgColor}>
      {state.label}
    </Badge>
  );
};

export default StateBadge;
