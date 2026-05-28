"use client";

import { createPortal } from "react-dom";
import { useEffect } from "react";
import type { ModalProps } from "./type";

const sizeClass = {
  sm: "w-[320px] min-h-[140px] rounded-[24px] p-[30px] md:w-[400px] md:min-h-[170px] md:rounded-[30px] md:p-10",
  md: "w-[320px] min-h-[185px] rounded-[24px] p-[30px] pb-[24px] md:w-[400px] md:min-h-[242px] md:rounded-[30px] md:p-[30px]",
  lg: "w-[321px] min-h-[493px] rounded-[30px] px-6 py-5 md:w-[385px] md:min-h-[549px] md:py-[30px]",
};

const Modal = ({ isOpen, onClose, size = "sm", children }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;
    const closeOnEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, [onClose, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      if (isOpen) {
        document.body.style.overflow = "unset";
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onMouseDown={onClose}
    >
      <div
        className={`${sizeClass[size]} bg-white`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
