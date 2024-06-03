import type { Metadata } from "next";
import "./globals.css";
import {ThemeProviders} from '@/components/providers/themeprovider'

export const metadata: Metadata = {
  title: "DummyBlog API - JSON API For Your Next Project  ",
  description: "JSON Blog API is a dummy api for your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ThemeProviders>
        {children}
        </ThemeProviders>
        </body>
    </html>
  );
}
