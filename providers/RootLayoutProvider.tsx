"use client";

import { Header, Sidebar } from "@/components/layout";
import { useSidebarLayout } from "@/hooks/useSidebarLayout";
import { cn } from "@/lib/utils";

export default function RootLayoutProvider({ children }: { children: React.ReactNode }) {
  const { open, compressed, toggleSidebar, toggleCompress } = useSidebarLayout();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Server Component */}
      <Sidebar open={open} toggleCompress={toggleCompress} compressed={compressed} toggleSidebar={toggleSidebar} className={cn("w-72", compressed ? "w-20" : "")} />

      {/* Main Content */}
      <div className={cn("flex flex-col flex-1 overflow-hidden", compressed ? "lg:ml-20" : "lg:ml-72")}>
        {/* Header - Server Component with Client children */}
        <Header toggleSidebar={toggleSidebar} open={open} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
