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
      router.replace("/toast-by-query");
      toast(`Toast 🍞 ${toastType}`);
    }
  }, [toastType]);
  return <></>;
}
