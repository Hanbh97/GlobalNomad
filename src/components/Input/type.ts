export type TextInputProps = {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  type?: "text" | "password";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
};
