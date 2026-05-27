import { ReactNode } from "react";

export type DropdownSize = "basic" | "large";

export interface DropdownChildrenProps {
  toggle: () => void;
}

export interface DropdownOption {
  label: string;
  onSelect: () => void;
}

export interface DropdownProps {
  size: DropdownSize;
  options: DropdownOption[];
  children: (props: DropdownChildrenProps) => ReactNode;
}
