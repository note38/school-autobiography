import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0 m-auto">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2024 Medical Portal. All rights reserved.
        </p>
        <nav className="flex items-center space-x-4 text-sm font-medium">
          <Link
            href="/biography"
            className="transition-colors hover:text-foreground/80"
          >
            Link of Biography
          </Link>
        </nav>
      </div>
    </footer>
  );
}
