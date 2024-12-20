"use client";

import { Circle, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RepositoryItemProps {
  name: string;
  isPublic: boolean;
  language: string;
  size: string;
  updatedAt: string;
}

export function RepositoryItem({ name, isPublic, language, size, updatedAt }: RepositoryItemProps) {
  return (
    <div className="py-3 hover:bg-gray-50/80 cursor-pointer">
      <div className="space-y-1.5">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-900">{name}</span>
          <Badge variant={isPublic ? "secondary" : "outline"} className="font-normal text-blue-500 bg-blue-50 border-blue-300 h-5">
            {isPublic ? "Public" : "Private"}
          </Badge>
        </div>
        <div className="flex items-center space-x-6 text-sm text-gray-800">
          <div className="flex items-center space-x-1">
            <span>{language}</span>
            <Circle className="h-1.5 w-1.5 fill-current text-blue-500" />
          </div>
          <div className="flex items-center space-x-1">
            <Database className="h-3 w-3" />
            <span>{size}</span>
          </div>
          <span>Updated {updatedAt}</span>
        </div>
      </div>
    </div>
  );
}