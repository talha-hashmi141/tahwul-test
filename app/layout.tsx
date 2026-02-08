import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import RootLayoutProvider from "@/providers/RootLayoutProvider";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tahwul - Audit Dashboard",
  description: "Digital Transformation & Compliance Tracking Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.className} antialiased`}>
        <RootLayoutProvider>{children}</RootLayoutProvider>
      </body>
    </html>
  );
}
