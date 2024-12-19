"use client";

import { RefreshCw, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RepositoryHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold">Repositories</h1>
        <p className="text-sm text-gray-500">33 total repositories</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="h-9 font-light">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh All
        </Button>
        <Button size="sm" className="h-9 font-light bg-blue-500 text-white hover:bg-blue-600">
          <Plus className="h-5 w-5 mr-2" />
          Add Repository
        </Button>
      </div>
    </div>
  );
}