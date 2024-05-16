import { ToastType } from "@/contexts/ToastContext";
import { Toast } from "./Toast";

interface Props {
  toasts: ToastType[];
  removeToast: (id: string) => void;
}
export function ToastContainer({ toasts, removeToast }: Props) {
  return (
    <div className="flex flex-col gap-2 p-8">
      {toasts.map((toast, index) => (
        <Toast key={toast.id} toast={toast} removeToast={removeToast} />
      ))}
    </div>
  );
}
