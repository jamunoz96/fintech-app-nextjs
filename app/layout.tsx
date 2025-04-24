import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { meta_data } from "@/wordings/layout";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = meta_data;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
