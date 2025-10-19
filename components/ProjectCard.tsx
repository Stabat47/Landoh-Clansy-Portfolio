import TechTag from "./TechTag";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  live,
  code,
  tech,
  image,
}: {
  title: string;
  description: string;
  live: string;
  code: string;
  tech: string[];
  image?: string;
}) {
  return (
    <div className="group bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-cyan-400 transition-all duration-300 shadow-md hover:shadow-cyan-500/10">
      {image && (
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            width={500}
            height={250}
            className="rounded-lg object-cover w-full h-48 transform transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
          />
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <TechTag key={t} name={t} />
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href={live}
          target="_blank"
          className="text-sm text-cyan-400 hover:underline"
        >
          Live Demo
        </a>
        <a
          href={code}
          target="_blank"
          className="text-sm text-gray-400 hover:text-cyan-300"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}
