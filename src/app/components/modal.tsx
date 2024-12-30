"use client";

import { ReactElement } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactElement;
}

export function Modal({ open, onClose, children }: ModalProps) {
  const feather = require("feather-icons");
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-color ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        className={` bg-slate-200 rounded-sm transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="p-5">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-red-600 "
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
