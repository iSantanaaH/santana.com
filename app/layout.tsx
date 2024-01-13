import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santana.com",
  description: "Loja de eletrônicos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/Images/logo.svg" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
