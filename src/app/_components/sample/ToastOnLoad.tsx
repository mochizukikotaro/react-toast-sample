"use client";

import { useToast } from "@/hooks/useToast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ToastOnLoad() {
  return (
    <div>
      <h2 className="text-lg">Toast 🍞 on Load</h2>
      <Link className="text-blue-500" href="/page3">
        Page3
      </Link>
    </div>
  );
}
