'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BotMessageSquare } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BotMessageSquare className="h-6 w-6 text-primary" />
            <span className="font-bold">NovaVest</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          {pathname !== '/chat' && (
            <Button asChild>
              <Link href="/chat">
                Start Analysis
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
