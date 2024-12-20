"use client";

import { cn } from "@/lib/utils";
import { SidebarHeader } from "@/components/layout/sidebar-header";
import { SidebarNav } from "@/components/layout/sidebar-nav";

interface SidebarProps {
  mobile?: boolean;
  onClose?: () => void;
}

export function Sidebar({ mobile, onClose }: SidebarProps) {
  return (
    <div className={cn(
      "flex flex-col h-full bg-white",
      mobile ? "p-4" : "w-64 border-r border-gray-100 p-4"
    )}>
      <div className="space-y-6 flex-1">
        <SidebarHeader mobile={mobile} onClose={onClose} />
        <SidebarNav />
      </div>
    </div>
  );
}