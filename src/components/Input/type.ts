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

export type TextAreaProps = {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  className?: string;
  textareaClassName?: string;
  textCount?: boolean;
};
