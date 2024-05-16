"use client";

import { useToast } from "@/hooks/useToast";
import { useEffect } from "react";

export function Page3Toast() {
  const toast = useToast();
  useEffect(() => {
    toast("Toast 🍞 on Load!");
  }, []);
  return null;
}
