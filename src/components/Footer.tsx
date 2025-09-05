import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-background border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Build By Satwik(#7's Creation) © {new Date().getFullYear()} NovaVest. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
