import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data";

export default function Projects() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-8 md:gap-12 px-4 md:px-20 snap-start overflow-hidden">
      {/* Heading */}
      <div className="text-center">
        <h2 className="font-semibold text-[2rem] md:text-[2rem] leading-tight">
          Latest projects in
        </h2>
        <h2 className="font-bold text-[2rem] md:text-[4rem] text-silver leading-tight">
          Development
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-zinc-700 overflow-hidden transition-all duration-300 hover:border-transparent hover:shadow-lg hover:scale-[1.02]"
          >
            <div className="w-full h-80 md:h-96 relative grayscale group-hover:grayscale-0 transition-all duration-300">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                fill
              />
            </div>

            <h3 className="absolute top-4 left-4 text-white text-lg font-bold z-10 drop-shadow-md">
              {project.title}
            </h3>

            {/* Hover Info */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
              <p className="text-sm text-white mb-4 drop-shadow-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-black/60 text-white text-xs px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
