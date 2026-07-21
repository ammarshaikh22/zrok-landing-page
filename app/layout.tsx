import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZrokLabs",
  description: "Intelligent automation, AI agents, and connected workflows for ambitious teams.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
