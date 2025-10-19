"use client";
import React from "react";
import { projectsByCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type Category = keyof typeof projectsByCategory;

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  previewCount?: number; 
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
  previewCount = 2,
}: CategoryTabsProps) {
  const projects = projectsByCategory[activeCategory] || [];

  return (
    <div className="text-center">
      {/* Category buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-3 py-1 rounded-md border transition ${
              activeCategory === cat
                ? "bg-cyan-500 text-white border-cyan-400"
                : "border-gray-700 text-gray-400 hover:text-cyan-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* mini preview of first 2 projects */}
      {projects.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
          {projects.slice(0, previewCount).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      )}
    </div>
  );
}
