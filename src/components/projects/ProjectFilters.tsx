'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { SoftwareStatus } from './types';
import { LayoutGrid, CheckCircle, Lock } from 'lucide-react';

interface ProjectFiltersProps {
  selectedStatus: SoftwareStatus | 'All';
  onFilterChange: (status: SoftwareStatus | 'All') => void;
}

const STATUS_FILTERS: (SoftwareStatus | 'All')[] = ['All', 'Available', 'Sold'];

const StatusIcon = ({ status }: { status: SoftwareStatus | 'All' }) => {
  switch (status) {
    case 'Available':
      return <CheckCircle className="mr-2 h-4 w-4" />;
    case 'Sold':
      return <Lock className="mr-2 h-4 w-4" />;
    case 'All':
      return <LayoutGrid className="mr-2 h-4 w-4" />;
    default:
      return null;
  }
};


export function ProjectFilters({ selectedStatus, onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="flex justify-center mb-16">
      <Tabs 
        value={selectedStatus} 
        onValueChange={(value) => onFilterChange(value as SoftwareStatus | 'All')} 
        className="w-full max-w-xl"
      >
        <TabsList className="grid w-full grid-cols-3 h-14 p-1.5 bg-gray-100 rounded-[1.5rem]">
          {STATUS_FILTERS.map((status) => (
            <TabsTrigger 
              key={status} 
              value={status}
              className="rounded-[1rem] data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-lg font-black uppercase tracking-widest text-[10px]"
            >
              <StatusIcon status={status} />
              {status}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
