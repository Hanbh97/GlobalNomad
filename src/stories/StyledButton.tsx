import { StyledButtonElement } from "./StyledButtonStyle";

export interface StyledButtonProps {
  isPrimary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

const StyledButton = ({
  isPrimary = false,
  size = "medium",
  label,
  isDisabled = false,
  onClick,
}: StyledButtonProps) => {
  return (
    <StyledButtonElement
      type="button"
      $isPrimary={isPrimary}
      $size={size}
      disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </StyledButtonElement>
  );
};

export default StyledButton;
