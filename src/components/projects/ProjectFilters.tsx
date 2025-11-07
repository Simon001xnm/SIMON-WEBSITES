'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { SoftwareStatus } from './types';
import { Globe, Smartphone, Server, LayoutGrid, CheckCircle, Package } from 'lucide-react';

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
      return <Package className="mr-2 h-4 w-4" />;
    case 'All':
      return <LayoutGrid className="mr-2 h-4 w-4" />;
    default:
      return null;
  }
};


export function ProjectFilters({ selectedStatus, onFilterChange }: ProjectFiltersProps) {
  return (
    <Tabs value={selectedStatus} onValueChange={(value) => onFilterChange(value as SoftwareStatus | 'All')} className="mb-8 flex justify-center">
      <TabsList className="grid w-full max-w-md grid-cols-3">
        {STATUS_FILTERS.map((status) => (
          <TabsTrigger key={status} value={status}>
            <StatusIcon status={status} />
            {status}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
