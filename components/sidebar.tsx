"use client";

import { Code2, Cloud, HelpCircle, Settings, MessageCircle, LogOut, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  mobile?: boolean;
  onClose?: () => void;
}

const menuItems = [
  { icon: Code2, label: "AI Code Review", href: "#" },
  { icon: Cloud, label: "Cloud Security", href: "#" },
  { icon: HelpCircle, label: "How to Use", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
  { icon: MessageCircle, label: "Support", href: "#" },
  { icon: LogOut, label: "Logout", href: "#" },
];

export function Sidebar({ mobile, onClose }: SidebarProps) {
  return (
    <div className={cn(
      "flex flex-col h-full bg-white",
      mobile ? "p-4" : "w-64 border-r border-gray-100 p-4"
    )}>
      <div className="space-y-6 flex-1">
        {mobile && (
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-xl">CodeAnt AI</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        )}
        
        {!mobile && (
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-xl">CodeAnt AI</span>
          </div>
        )}
        
        <div className="space-y-1">
          <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md">
            <Link href="#" className="flex items-center space-x-2">
              <span>Repositories</span>
            </Link>
          </div>
          
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}