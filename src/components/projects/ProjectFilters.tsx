'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { ProjectType } from './types';
import { Globe, Smartphone, Server, LayoutGrid } from 'lucide-react';

interface ProjectFiltersProps {
  selectedType: ProjectType;
  onFilterChange: (type: ProjectType) => void;
}

const PROJECT_TYPES: ProjectType[] = ['All', 'Web', 'Mobile', 'Systems'];

const TypeIcon = ({ type }: { type: ProjectType }) => {
  switch (type) {
    case 'Web':
      return <Globe className="mr-2 h-4 w-4" />;
    case 'Mobile':
      return <Smartphone className="mr-2 h-4 w-4" />;
    case 'Systems':
      return <Server className="mr-2 h-4 w-4" />;
    case 'All':
      return <LayoutGrid className="mr-2 h-4 w-4" />;
    default:
      return null;
  }
};


export function ProjectFilters({ selectedType, onFilterChange }: ProjectFiltersProps) {
  return (
    <Tabs value={selectedType} onValueChange={(value) => onFilterChange(value as ProjectType)} className="mb-8 flex justify-center">
      <TabsList className="grid w-full max-w-md grid-cols-2 sm:grid-cols-4">
        {PROJECT_TYPES.map((type) => (
          <TabsTrigger key={type} value={type}>
            <TypeIcon type={type} />
            {type}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
