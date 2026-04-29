import { useEffect, useState } from "react";

type Chapter = { id: string; label: string };

export function ChapterNav({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    chapters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <nav className="hidden lg:block sticky top-24 self-start">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Chapters</p>
      <ul className="space-y-1 border-l border-border pl-4">
        {chapters.map((c, i) => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              className={`block py-1.5 text-sm transition-all duration-300 hover:text-primary ${
                active === c.id
                  ? "text-primary font-medium translate-x-1"
                  : "text-muted-foreground"
              }`}
            >
              <span className="text-xs opacity-50 mr-2">{String(i + 1).padStart(2, "0")}</span>
              {c.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
