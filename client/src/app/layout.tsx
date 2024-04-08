import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { cn } from '../../lib/utils/cn';
import { Toaster } from '@/components/ui/sonner';
import { Nav } from '@/components/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ThriveStart',
  description: 'From the house of Heisenberg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className={cn(inter.className, 'h-full')}>
        <Toaster />
        <BackgroundBeams className="z-[-1]" />
        {children}
      </body>
    </html>
  );
}
