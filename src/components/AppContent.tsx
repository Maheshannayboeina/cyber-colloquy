'use client';

import { useAppwriteRegistration } from "@/hooks/useAppwriteRegistration";

export default function AppContent({ children }: { children: React.ReactNode }) {
  useAppwriteRegistration();

  return <>{children}</>;
}
