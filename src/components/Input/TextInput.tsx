"use client";

import { EyeOff, EyeOn } from "@/constants/icons";
import { useState } from "react";
import { TextInputProps } from "./type";

const TextInput = ({
  id,
  name,
  label,
  placeholder,
  errorMessage,
  type,
  value,
  onChange,
  disabled = false,
  className = "",
}: TextInputProps) => {
  const inputId = id || name;
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const status = errorMessage ? "error" : isFocused ? "focus" : "default";
  return (
    <div className={className}>
      {label && (
        <label htmlFor={inputId} className="text-16-medium mb-[10px] block">
          {label}
        </label>
      )}
      <div
        className={`relative h-[54px] border-2 border-gray-100 rounded-[16px] shadow-[0_2px_6px_0_rgba(0,0,0,0.02)] ${status === "focus" ? "border-primary-500" : ""}
${status === "error" ? "border-red-500" : ""}`}
      >
        <input
          id={inputId}
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          type={type === `password` && isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full h-full ${type === "password" ? "pr-[56px]" : "pr-[20px]"} pl-[20px] border-none rounded-[16px] outline-none text-16-medium bg-white placeholder-gray-400 autofill-white disabled:bg-gray-50 disabled:text-gray-400 disabled:placeholder-gray-200`}
        />
        {type === "password" && (
          <button
            type="button"
            disabled={disabled}
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            className="absolute right-5 top-1/2 -translate-y-1/2 disabled:cursor-default"
          >
            {isPasswordVisible ? (
              <EyeOn className="size-6 invert-[0.5]" />
            ) : (
              <EyeOff className="size-6 invert-[0.5]" />
            )}
          </button>
        )}
      </div>
      {errorMessage && (
        <p className="text-red-500 text-14-medium mt-[6px] ml-2">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
export default TextInput;
