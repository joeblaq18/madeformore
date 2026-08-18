import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MADEFORMORE — Wear the Mindset. Live the Vision.",
  description:
    "MADEFORMORE is more than a brand. It's a movement for dreamers, achievers, and everyone becoming more.",
  keywords: [
    "MadeForMore",
    "Made For More",
    "streetwear",
    "Ghana streetwear",
    "African fashion",
    "gymwear",
    "premium clothing",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}