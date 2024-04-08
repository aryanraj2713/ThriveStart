'use client';

import { Button } from '@/components/ui/button';
import { CircleUser, Menu, Package2 } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Link from 'next/link';

const siteLinks = [
  {
    name: 'Dashboard',
    to: '/dashboard',
  },
  {
    name: 'Chat',
    to: '/chat',
  },

];

export const Nav = () => {
  const isInvestor = localStorage.getItem('is_investor');
  const router = useRouter();
  return (
    <header className="fixed z-50 top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between w-full">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {isInvestor !== 'true' && siteLinks.map(link => (
          <Link
            key={link.name}
            href={link.to}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.name}
          </Link>
        ))}
        {
          localStorage.getItem('is_investor') === 'true' && (
            <Link
              href="/investor"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
          )
        }

      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {siteLinks.map(link => (
              <Link
                key={link.name}
                href={link.to}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                router.push('/profile');
              }}
            >
              Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                localStorage.clear();
                router.push('/');
                toast.info('You are now logged out!');
              }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
