"use client";

import { useState } from "react";
import { TextAreaProps } from "./type";

const TextArea = ({
  id,
  name,
  label,
  placeholder,
  errorMessage,
  value = "",
  onChange,
  disabled = false,
  className = "",
  textareaClassName = "", //textarea 높이값 줄때
  textCount, //글자수 세기
}: TextAreaProps) => {
  const inputId = id || name;
  const [isFocused, setIsFocused] = useState(false);

  const status = errorMessage ? "error" : isFocused ? "focus" : "default";
  const maxLength = 100;

  return (
    <div className={className}>
      {label && (
        <label htmlFor={inputId} className="text-16-medium mb-[10px] block">
          {label}
        </label>
      )}

      <div
        className={`relative border-2 border-gray-100 rounded-[16px] shadow-[0_2px_6px_0_rgba(0,0,0,0.02)]
          ${status === "focus" ? "border-primary-500" : ""}
          ${status === "error" ? "border-red-500" : ""}
        ${textareaClassName}`}
      >
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          maxLength={textCount ? maxLength : undefined}
          className="w-full h-full p-[20px] border-none rounded-[16px] outline-none text-16-medium bg-white placeholder-gray-400 disabled:bg-gray-50 disabled:text-gray-400 disabled:placeholder-gray-200 resize-none"
        />
      </div>

      {(errorMessage || textCount) && (
        <div className="flex justify-between mt-2">
          <div>
            {errorMessage && (
              <p className="text-red-500 text-14-medium ml-2">{errorMessage}</p>
            )}
          </div>

          {textCount && (
            <span className="text-14-medium text-gray-600">
              {value.length}/{maxLength}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default TextArea;
