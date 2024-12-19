"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Sidebar } from "@/components/layout/sidebar";
import Image from "next/image";

interface MobileHeaderProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function MobileHeader({ isOpen, setIsOpen }: MobileHeaderProps) {
  return (
    <div className="md:hidden w-full">
      <div className="flex items-center justify-between p-2 border-b">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={30} height={30}/>
          <span className="font-light text-xl">CodeAnt AI</span>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="p-0 h-[70dvh]">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <Sidebar mobile onClose={() => setIsOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}