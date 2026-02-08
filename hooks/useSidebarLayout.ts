"use client";

import { useState, useCallback, useEffect } from "react";

export function useSidebarLayout() {
  const [open, setOpen] = useState(false);
  const [compressed, setCompressed] = useState(false);

  const toggleSidebar = useCallback(() => setOpen(prev => !prev), []);
  const toggleCompress = useCallback(() => setCompressed(prev => !prev), []);

  useEffect(() => {
    const syncWithWidth = () => {
      setOpen(false);
      setCompressed(false);
    };

    syncWithWidth();

    window.addEventListener("resize", syncWithWidth);
    return () => window.removeEventListener("resize", syncWithWidth);
  }, []);

  return { open, setOpen, compressed, setCompressed, toggleSidebar, toggleCompress };
}
