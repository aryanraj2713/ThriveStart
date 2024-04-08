import { Message, UserData } from '@/app/data';
import { cn } from '@/lib/utils';
import React, { useRef, type ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import ChatBottombar from './chat-bottombar';
import { AnimatePresence, motion } from 'framer-motion';

interface ChatListProps {
  messages?: Message[];
  selectedUser: UserData;
  sendMessage: (newMessage: Message) => void;
  isMobile: boolean;
}

export function ChatList({
  messages,
  selectedUser,
  sendMessage,
}: ChatListProps) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
    console.log('messages', messages);
  }, [messages]);

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
      <div
        ref={messagesContainerRef}
        className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col py-2"
      >
        {messages && messages.length > 0 ? (
          <AnimatePresence>
            {messages?.map(message => (
              <motion.div
                key={message.id}
                layout
                initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                transition={{
                  opacity: { duration: 0.1 },
                  layout: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: messages.indexOf(message) * 0.05 + 0.2,
                  },
                }}
                style={{
                  originX: 0.5,
                  originY: 0.5,
                }}
                className={cn(
                  'flex flex-col p-2 gap-2 whitespace-pre-wrap',
                  message.name !== selectedUser.name
                    ? 'items-start'
                    : 'items-end'
                )}
              >
                <div className="flex gap-3 items-center">
                  {message.name !== selectedUser.name && (
                    <Avatar>
                      <AvatarImage
                        src={message.avatar}
                        alt={message.name}
                        width={6}
                        height={6}
                        className="w-10 h-10"
                      />
                      <AvatarFallback className="w-10 h-10" />
                    </Avatar>
                  )}
                  <span className=" bg-accent p-3 rounded-md max-w-xs">
                    {message.message}
                  </span>
                  {message.name === selectedUser.name && (
                    <Avatar>
                      <AvatarImage
                        src={selectedUser.avatar}
                        alt={selectedUser.name}
                        width={6}
                        height={6}
                        className="w-10 h-10"
                      />
                      <AvatarFallback className="w-10 h-10" />
                    </Avatar>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          <p className="text-muted-foreground flex text-base h-full w-full justify-center items-center">
            No messages yet. Start the conversation!
          </p>
        )}
      </div>
      <ChatBottombar sendMessage={sendMessage} currentUser={selectedUser} />
    </div>
  );
}
