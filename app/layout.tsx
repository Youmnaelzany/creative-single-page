import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const commissionerFont = Commissioner({
  subsets: ["latin"],
  variable: "--font-commissioner",
});

export const metadata: Metadata = {
  title: "Creative Work",
  description: "Creative Single Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={commissionerFont.variable}>
      <body
        suppressHydrationWarning={true}
        className={`${commissionerFont.variable} max-w-360 mx-auto antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
