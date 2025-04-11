import Image from 'next/image';

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 max-w-6xl mx-auto">
    {/* Texto */}
    <div className="max-w-xl">
      <h1 className="text-4xl font-bold mb-6">A little about me</h1>
      <p className="text-gray-700 mb-4">
      I am a young man passionate about technology. I have been involved in this area since I was 15 years old. I studied a software programming technician in my country and I did my internship in a telecommunications company, where I gained real experience in the sector.
      </p>
      <p className="text-gray-700 mb-4">
      Besides technology, I love sports. I feel that I am good at almost all of them, but the one I played the most as a kid was soccer, since it is the most popular sport in South America.

      </p>
      <p className="text-gray-700 mb-4">
      I like to learn through forums and <b>YouTube</b> has been one of my favorite tools to grow and discover new ideas.
      </p>
      
    </div>

    {/* Imagen */}
    <div className="flex-shrink-0">
      <Image
        src="/yo2.jpeg"
        alt="Foto de perfil"
        width={280}
        height={280}
        className="rounded-xl object-cover shadow-md"
      />
    </div>
  </section>


  );
}
