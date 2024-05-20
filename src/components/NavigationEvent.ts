"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface Props {
  clearToasts: () => void;
}

export function NavigationEvents({ clearToasts }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    clearToasts();
  }, [pathname]);

  return null;
}
