import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "JSON Blog API",
  description: "JSON Blog API is a dummy api for your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
