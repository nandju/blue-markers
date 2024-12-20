// app/components/ThemeSwitcher.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme == "dark" ? (
        <div className="rounded-full p-1 border-2 border-foreground"><Sun onClick={() => setTheme("light")} /></div>
        
      ) : (
        <div className="rounded-full p-1 border-2 border-foreground"><Moon onClick={() => setTheme("dark")} /></div>
      )}
    </>
  );
}
