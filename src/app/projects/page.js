import ProjectCard from '../components/ProjectCard';
import Image from 'next/image';

export const metadata = {
  title: "Portfolio - Projects",
  description: "Things I’ve made trying to put my dent in the universe.",
};


const projects = [
  {
    logo: "/avantel.jpg",
    name: "Avantel",
    content:
      "Communications company in Colombia",
    link: "https://www.wom.co/",
  },
  {
    logo: "/mps.jpg",
    name: "Mps Services",
    content:
      "Content creation consulting",
    link: "https://www.mps.com.co/",
  },
  {
    logo: "/primax.png",
    name: "Prisma",
    content:
      "Vocational guidance services",
    link: "https://www.primax.com.co/",
  },

];

export default function ProjectsPage() {
  return (
    <main className="px-6 md:px-12 py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Things I’ve made trying improve my skills.
      </h1>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
      These were pages that I developed by learning on my own and also university projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </main>
  );
}