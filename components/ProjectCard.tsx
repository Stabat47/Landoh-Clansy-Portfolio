import TechTag from "./TechTag";
import Image from "next/image";

export default function ProjectCard({ title, description, live, code, tech, image }: {
  title: string;
  description: string;
  live: string;
  code: string;
  tech: string[];
  image?: string;
}) {
  return (
    <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-cyan-400 transition">
      {image && (
        <div className="mb-4">
          <Image
            src={image}
            alt={title}
            width={500}
            height={250}
            className="rounded-lg object-cover w-full h-48"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => <TechTag key={t} name={t} />)}
      </div>
      <div className="flex gap-3">
        <a href={live} target="_blank" className="text-sm text-cyan-400 hover:underline">Live Demo</a>
        <a href={code} target="_blank" className="text-sm text-gray-400 hover:text-cyan-300">Source Code</a>
      </div>
    </div>
  );
}
