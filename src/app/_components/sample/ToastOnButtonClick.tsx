"use client";

import { useToast } from "@/hooks/useToast";

export function ToastOnButtonClick() {
  const toast = useToast();

  const handleClick = () => {
    toast("Toast 🍞 on Button Click!");
  };

  return (
    <div>
      <h2 className="text-lg">Toast 🍞 on Button Click!</h2>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Show Toast
      </button>
    </div>
  );
}
