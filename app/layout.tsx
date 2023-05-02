import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Analytics } from '@vercel/analytics/react';

import { Providers } from './providers';
export const metadata = {
  title: 'Chamara Perera | Full Stack Developer',
  description:
    "Chamara Perera is a full stack developer based in Brisbane, Australia. Specializing in the MERN stack and passionate about using technology to improve healthcare.Let's collaborate and bring your ideas to life!",
  keywords: [
    'Chamara Perera',
    'Full Stack Developer',
    'MERN Stack',
    'Brisbane',
    'Australia',
    'Healthcare',
    'Technology',
    'Portfolio',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //Navbar wrapped inside the Providers component
  return (
    <html suppressHydrationWarning lang="en">
      <body className=" dark:bg-stone-900">
        <Providers>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
