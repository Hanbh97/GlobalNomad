import React from "react";

interface PhotoInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "type"> {
  id?: string;
  name: string;
  label: string;
}

export default PhotoInputProps;
