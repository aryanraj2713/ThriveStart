import React from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { type UserData } from '@/app/data';
import { RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { AvatarFallback } from '@radix-ui/react-avatar';

interface ChatTopbarProps {
  selectedUser: UserData;
  reset: () => void;
}

export default function ChatTopbar({ selectedUser, reset }: ChatTopbarProps) {
  // const TopbarIcons = [{ icon: Phone }, { icon: Video }, { icon: Info }];
  const TopbarIcons = [
    {
      icon: RotateCcw,
      label: 'Refresh',
      onTap: reset,
    },
  ];

  const UserAvatar = () => {
    if (typeof selectedUser.avatar === 'string') {
      return (
        <Avatar className="flex justify-center items-center">
          <AvatarImage
            src={selectedUser.avatar}
            alt={selectedUser.name}
            width={6}
            height={6}
            className="w-10 h-10"
          />
          <AvatarFallback className="w-10 h-10" />
        </Avatar>
      );
    }

    return selectedUser.avatar;
  };

  return (
    <div className="w-full h-20 flex p-4 justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <UserAvatar />
        <div className="flex flex-col">
          <span className="font-medium">{selectedUser.name}</span>
          <span className="text-xs">Active 2 mins ago</span>
        </div>
      </div>

      <div>
        {TopbarIcons.map((icon, index) => (
          <Link
            key={index}
            href="#"
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'h-9 w-9',
              'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
            )}
          >
            <icon.icon
              size={20}
              className="text-muted-foreground"
              onClick={icon.onTap}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
