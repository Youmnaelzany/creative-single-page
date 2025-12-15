import type { Metadata } from 'next';
import { Commissioner } from 'next/font/google';
import './globals.css';
import HeaderWrapper from '@/components/HeaderWrapper';

// Optimize font loading with display: swap
const commissionerFont = Commissioner({
  subsets: ['latin'],
  variable: '--font-commissioner',
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Creative Work',
  description: 'Creative Single Page',
  viewport: 'width=device-width, initial-scale=1',
};

// Preconnect to external domains
const preconnectDomains = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={commissionerFont.variable}>
      <head>
        {preconnectDomains.map((href) => (
          <link key={href} rel="preconnect" href={href} crossOrigin="anonymous" />
        ))}
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${commissionerFont.variable} mx-auto max-w-360 antialiased`}
      >
        <HeaderWrapper />
        {children}
      </body>
    </html>
  );
}
