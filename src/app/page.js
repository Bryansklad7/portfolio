import Image from 'next/image';

import Link from 'next/link';
export const metadata = {
  title: "Portfolio - Home",
  description: "Welcome to my portfolio website!",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
    <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
      {/* Foto */}
      <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-gray-300">
        <Image
          src="/yo.png"
          alt="Profile"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4">Hello I´m Bryan </h1>
        <h2 className="text-xl font-semibold mb-2">I´m 25 years old</h2>
        <p className="text-gray-700 mb-6">
        I am an international student from Colombia that it´s passionated for technology.
        </p>
       

        <div className="flex justify-center md:justify-start gap-4">
          <Link href="/" className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-500 transition">
            Home
          </Link>
          <Link href="/about" className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-600 transition">
            About
          </Link>
          <Link href="/projects" className="bg-sky-300 text-black font-semibold py-2 px-4 rounded-full hover:bg-sky-400 transition">
            Projects
          </Link>
        </div>
      </div>
    </div>
  </main>
  );
}