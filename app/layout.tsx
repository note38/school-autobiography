import "./globals.css";
import { Inter } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center m-auto">
              <SiteNav />
            </div>
          </header>
          <main className="flex-1 flex items-center justify-center">
            {/* Centering content */}
            <div className="mx-auto max-w-4xl text-center">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
