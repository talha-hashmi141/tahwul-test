'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export function SearchInput({
  placeholder = 'Search',
  onSearch,
  className,
}: SearchInputProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <div className={className}>
      <div className="flex w-full min-w-md max-w-xl items-center rounded-md bg-background border border-gray-200 px-3 py-2">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="ml-2 w-full focus:outline-none"
        />
      </div>
    </div>
  );
}
