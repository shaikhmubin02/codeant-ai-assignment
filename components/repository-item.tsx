"use client";

import { Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge-custom";

interface RepositoryItemProps {
  name: string;
  isPublic: boolean;
  language: string;
  size: string;
  updatedAt: string;
}

export function RepositoryItem({ name, isPublic, language, size, updatedAt }: RepositoryItemProps) {
  return (
    <div className="py-4 hover:bg-gray-50/80 cursor-pointer">
      <div className="space-y-1.5">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-900">{name}</span>
          <Badge variant={isPublic ? "public" : "private"} className="font-normal text-blue-500">
            {isPublic ? "Public" : "Private"}
          </Badge>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Circle className="h-2.5 w-2.5 fill-current" />
            <span>{language}</span>
          </div>
          <span>{size}</span>
          <span>•</span>
          <span>Updated {updatedAt}</span>
        </div>
      </div>
    </div>
  );
}