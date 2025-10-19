"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import CategoryTabs from "@/components/CategoryTabs";
import ProjectCard from "@/components/ProjectCard";
import { projectsByCategory } from "@/data/projects";

export default function ProjectsPage() {
  // Get all category names dynamically
  const categories = Object.keys(projectsByCategory) as Array<
    keyof typeof projectsByCategory
  >;

  // Default to the first category
  const [activeCategory, setActiveCategory] = useState<
    keyof typeof projectsByCategory
  >(categories[0]);

  // Get projects for the active category
  const projects = projectsByCategory[activeCategory] || [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="My Projects"
          subtitle="A showcase of the apps, tools, and experiments I’ve built."
        />

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* No Projects Fallback */}
        {projects.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No projects found for this category.
          </p>
        )}
      </div>
    </main>
  );
}
