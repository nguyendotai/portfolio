import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LenisProvider } from '@/components/providers/LenisProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tai - Frontend Developer Portfolio',
  description: 'Building scalable web applications with Next.js, TypeScript & modern stack.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-200 min-h-screen`}>
        <LenisProvider>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}