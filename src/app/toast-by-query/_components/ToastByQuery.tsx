"use client";

import { useToast } from "@/hooks/useToast";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function ToastByQuery() {
  const toast = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const toastType = searchParams.get("toast_type");
  useEffect(() => {
    if (toastType === "hello") {
      toast(`Toast 🍞 ${toastType}`);
      router.replace("/toast-by-query");
    }
  }, [toastType]);
  return <></>;
}
