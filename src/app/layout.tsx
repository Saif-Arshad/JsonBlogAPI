import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { Providers } from "@/provider.chakra";

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
      <body >
        <Providers>
        <Header/>
        {children}
        <Footer/>
        </Providers>
        </body>
    </html>
  );
}
