'use client';
import { Chat } from '@/components/chat/chat';
import React, { useEffect, useState } from 'react';

const ChatPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenWidth();

    // Event listener for screen width changes
    window.addEventListener('resize', checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <main className="flex h-full flex-col items-center justify-center p-4 md:p-8">
      <div className="z-10 border rounded-lg max-w-5xl w-full h-full text-sm lg:flex">
        <Chat isMobile={isMobile} />
      </div>
    </main>
  );
};

export default ChatPage;
