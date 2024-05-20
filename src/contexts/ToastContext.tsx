"use client";
import { NavigationEvents } from "@/components/NavigationEvent";
import { ToastContainer } from "@/components/ToastContainer";
import { createContext, useState } from "react";

type ToastContextType = (message: string) => void;

const ToastContext = createContext<ToastContextType>((message: string) => {});

export interface ToastType {
  id: string;
  message: string;
}

function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const toast = (message: string) => {
    setTimeout(() => {
      setToasts((prev) => [...prev, { id: new Date().toISOString(), message }]);
    }, 100);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const clearToasts = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <NavigationEvents clearToasts={clearToasts} />
    </ToastContext.Provider>
  );
}

export { ToastProvider, ToastContext };
