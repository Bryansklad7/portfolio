import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ul className={'flex flex-row space-x-4 my-4 justify-center'}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
    </ul>
    {children}
    
    <footer className="border-t text-sm text-gray-500 px-[144px] pt-[40px] pb-[64px]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <nav className="flex gap-6">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="about" className="hover:underline">
                About
              </a>
              <a href="projects" className="hover:underline">
                Projects
              </a>
              
            </nav>
            <p className="text-xs">© 2025 Bryan Nino. All rights reserved.</p>
          </div>
        </footer>
    </body>
    </html>
  );
}
