"use client";

import { RepositoryItem } from "@/components/repositories/repository-item";
import { Repository } from "@/types/repository";

interface RepositoryListProps {
  repositories: Repository[];
}

export function RepositoryList({ repositories }: RepositoryListProps) {
  return (
    <div className="divide-y divide-gray-200 ">
      {repositories.map((repo) => (
        <RepositoryItem key={repo.name} {...repo} />
      ))}
    </div>
  );
}