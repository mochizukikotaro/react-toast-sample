import { ToastType } from "@/contexts/ToastContext";
import { useEffect } from "react";

interface Props {
  toast: ToastType;
  removeToast: (id: string) => void;
}
export function Toast({ toast, removeToast }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-lime-200 p-4 rounded-md">
      <div>id: {toast.id}</div>
      <div>message: {toast.message}</div>
    </div>
  );
}
