"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"          // toggles <html class="dark">
      defaultTheme="system"      // default = system
      enableSystem
      disableTransitionOnChange  // avoids ugly animation flashes
    >
      {children}
    </ThemeProvider>
  );
}
