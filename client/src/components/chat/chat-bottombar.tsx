import { FileImage, Paperclip, SendHorizontal, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import { AnimatePresence } from 'framer-motion';
import { Message, type UserData } from '@/app/data';
import { Input } from '../ui/input';

interface ChatBottombarProps {
  sendMessage: (newMessage: Message) => void;
  currentUser: UserData;
}

export const BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }];

export default function ChatBottombar({
  sendMessage,
  currentUser,
}: ChatBottombarProps) {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleThumbsUp = () => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      name: currentUser.name,
      avatar: currentUser.avatar,
      message: '👍',
    };
    sendMessage(newMessage);
    setMessage('');
  };

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: crypto.randomUUID(),
        name: currentUser.name,
        avatar: currentUser.avatar,
        message: message.trim(),
      };
      sendMessage(newMessage);
      setMessage('');

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }

    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault();
      setMessage(prev => prev + '\n');
    }
  };

  return (
    <div className="p-2 flex justify-between w-full items-center gap-2">
      {/* <div className="flex">
        {!message.trim() && !isMobile && (
          <div className="flex">
            {BottombarIcons.map((icon, index) => (
              <Link
                key={index}
                href="#"
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'h-9 w-9',
                  'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                )}
              >
                <icon.icon size={20} className="text-muted-foreground" />
              </Link>
            ))}
          </div>
        )}
      </div> */}

      <AnimatePresence initial={false}>
        <Input
          autoComplete="off"
          value={message}
          ref={inputRef}
          onKeyDown={handleKeyPress}
          onChange={handleInputChange}
          name="message"
          placeholder="Aa"
          className="w-full border rounded-full resize-none bg-background h-12"
        />

        {message.trim() ? (
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'h-9 w-9',
              'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white shrink-0'
            )}
            onClick={handleSend}
          >
            <SendHorizontal size={20} className="text-muted-foreground" />
          </Link>
        ) : (
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'h-9 w-9',
              'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white shrink-0'
            )}
            onClick={handleThumbsUp}
          >
            <ThumbsUp size={20} className="text-muted-foreground" />
          </Link>
        )}
      </AnimatePresence>
    </div>
  );
}
