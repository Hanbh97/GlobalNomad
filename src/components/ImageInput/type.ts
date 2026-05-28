import React from "react";

interface ImageInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "name" | "type"
> {
  id?: string;
  name: string;
  label: string;
}

export default ImageInputProps;
