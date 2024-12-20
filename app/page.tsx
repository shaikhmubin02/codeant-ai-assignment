"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileHeader } from "@/components/layout/mobile-header";
import { RepositoryHeader } from "@/components/repositories/repository-header";
import { RepositorySearch } from "@/components/repositories/repository-search";
import { RepositoryList } from "@/components/repositories/repository-list";
import { repositories } from "@/data/repositories";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Content wrapper */}
      <div className="flex flex-col w-full">
        {/* Mobile Header */}
        <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Main Content */}
        <main className="flex-1 min-h-0">
          <div className="h-full p-4 md:p-6 bg-gray-50">
            <Card className="h-full p-4">
              <RepositoryHeader />
              <RepositorySearch value={searchQuery} onChange={setSearchQuery} />
              <RepositoryList repositories={filteredRepositories} />
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}