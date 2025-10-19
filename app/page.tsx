"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import CategoryTabs from "@/components/CategoryTabs";
import { projectsByCategory } from "@/data/projects";

export default function Home() {
  const categories = Object.keys(projectsByCategory) as Array<
    keyof typeof projectsByCategory
  >;
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="space-y-16">
      <Hero />
      <section id="projects" className="pt-10">
        <SectionHeader
          title="Featured Projects"
          subtitle="Explore my recent work"
        />
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </section>
    </div>
  );
}
