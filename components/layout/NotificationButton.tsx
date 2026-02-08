'use client';

import { useState } from 'react';
import { Bell } from 'lucide-react';

interface NotificationButtonProps {
  count?: number;
}

export function NotificationButton({ count = 0 }: NotificationButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative text-gray-500 hover:text-gray-700 transition-colors"
      aria-label={`Notifications${count > 0 ? ` (${count} unread)` : ''}`}
    >
      <Bell className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
          {count > 9 ? '9+' : count}
        </span>
      )}
    </button>
  );
}
