// app/(auth)/AuthLayout.tsx

import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen sm:px-[156px] px-5">
      {children}
    </div>
  );
}
