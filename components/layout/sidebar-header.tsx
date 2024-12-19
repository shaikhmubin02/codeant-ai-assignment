"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SidebarHeaderProps {
  mobile?: boolean;
  onClose?: () => void;
}

export function SidebarHeader({ mobile, onClose }: SidebarHeaderProps) {
  if (mobile) {
    return (
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="logo" width={30} height={30}/>
        <span className="font-light text-xl">CodeAnt AI</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Image src="/logo.png" alt="logo" width={30} height={30}/>
      <span className="font-light text-xl mt-1">CodeAnt AI</span>
    </div>
  );
}