import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baby Rank",
  description: "Baby Rank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="border-b">
            <div className="h-16 container flex justify-between items-center">
              <h2>Baby Rank</h2>
              <div className="flex gap-4 items-center">
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
              </div>
            </div>
          </div>
          <SignedIn>
            {children}
          </SignedIn>
          <SignedOut>
            <h1>CONNECTE TOI</h1>
          </SignedOut>
        </Providers>
      </body>
    </html>
  );
}
