"use client";

import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";

export function ToastWithNavigation() {
  const router = useRouter();
  const toast = useToast();

  const handleClick = () => {
    router.push("/page2");
    toast("Toast 🍞 with Navigation!");
  };

  return (
    <div>
      <h2 className="text-lg">Toast 🍞 with Navigation!</h2>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Page2
      </button>
    </div>
  );
}
