import { Message, recipient, user } from '@/app/data';
import ChatTopbar from './chat-topbar';
import { ChatList } from './chat-list';
import React, { useEffect } from 'react';

interface ChatProps {
  messages?: Message[];
  isMobile: boolean;
}

export function Chat({ messages, isMobile }: ChatProps) {
  const [messagesState, setMessages] = React.useState<Message[]>(
    messages ?? []
  );

  const reset = () => {
    setMessages([]);
  };

  const sendMessage = (newMessage: Message) => {
    setMessages(prev => [...prev, newMessage]);
    const responseId = newMessage.id + 1;
    const loading: Message = {
      id: responseId,
      name: recipient.name,
      avatar: recipient.avatar,
      message: '...',
    };
    setTimeout(() => {
      setMessages(prev => [...prev, loading]);
    }, 800);
    setTimeout(() => {
      setMessages(prev => {
        const index = prev.findIndex(message => message.id === responseId);
        if (index === -1) {
          return prev;
        }
        prev[index] = {
          id: responseId,
          name: recipient.name,
          avatar: recipient.avatar,
          message: 'Hello! How can I help you?',
        };
        return [...prev];
      });
    }, 2500);
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={recipient} reset={reset} />
      <ChatList
        messages={messagesState}
        selectedUser={user}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div>
  );
}
