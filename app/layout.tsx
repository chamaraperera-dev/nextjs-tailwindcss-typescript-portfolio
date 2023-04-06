import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Providers } from './providers';
export const metadata = {
  title: 'Chamara Perera | Full Stack Developer | Portfolio',
  description:
    "Chamara Perera is a full stack developer and medical doctor based in Brisbane, Australia. Specializing in the MERN stack and passionate about using technology to improve healthcare.Let's collaborate and bring your ideas to life!",
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
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
