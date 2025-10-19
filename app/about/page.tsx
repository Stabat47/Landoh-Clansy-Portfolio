import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-16">
      <SectionHeader title="About Me" subtitle="My developer journey" />
      <p className="text-gray-300 leading-relaxed mt-4">
        Hey there — I’m <strong>Landoh Clansy</strong>, a passionate self-taught full-stack developer
        from Yaoundé, Cameroon 🇨🇲. My journey into coding began during the 2020 COVID lockdowns when
        I discovered <strong>freeCodeCamp</strong>. What started as curiosity quickly turned into a
        deep passion — I spent countless late nights learning, building, and solving challenges purely
        out of love for creating something from nothing.
        <br /><br />
        I didn’t attend a formal computer science program — everything I know comes from
        relentless self-learning through online platforms, YouTube tutorials, and countless coding articles.
        That determination eventually led me to earn multiple <strong>freeCodeCamp certifications</strong> in 2025,
        marking a milestone in my journey.
        <br /><br />
        Today, I build interactive web apps, backend APIs, and AI-powered systems that blend logic with creativity.
        I’m always exploring new technologies, improving my craft, and taking on challenging projects that push my limits.
        <br /><br />
        Lately, I’ve been turning my projects into installable apps using <strong>PWA Builder</strong> — making them
        accessible on Android, iOS, and Windows. I believe every line of code I write brings me closer to mastering the art
        of building seamless, meaningful digital experiences.
        <br /><br />
        My mission? To keep learning, keep building, and inspire others who, like me, started from zero — driven by nothing
        but passion and persistence.
      </p>
    </section>
  );
}
