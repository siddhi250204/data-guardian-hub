import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import evolutionImg from "@/assets/evolution.jpg";
import lifecycleImg from "@/assets/lifecycle.jpg";
import securityImg from "@/assets/security.jpg";
import aiImg from "@/assets/ai-education.jpg";
import privacyImg from "@/assets/privacy.jpg";
import futureImg from "@/assets/future.jpg";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ChapterNav } from "@/components/ChapterNav";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const chapters = [
  { id: "introduction", label: "Introduction" },
  { id: "evolution", label: "Evolution of Assessment" },
  { id: "governance", label: "Meaning of Data Governance" },
  { id: "importance", label: "Importance in Higher Ed" },
  { id: "lifecycle", label: "Data Lifecycle" },
  { id: "privacy", label: "Privacy Concerns" },
  { id: "security", label: "Security Threats" },
  { id: "fairness", label: "Fairness in Evaluation" },
  { id: "ai", label: "Role of AI" },
  { id: "oversight", label: "Human Oversight" },
  { id: "transparency", label: "Transparency" },
  { id: "retention", label: "Retention & Deletion" },
  { id: "access", label: "Access Control" },
  { id: "ethics", label: "Legal & Ethical Duties" },
  { id: "vendors", label: "Third-Party Platforms" },
  { id: "case-study", label: "Case Study" },
  { id: "best-practices", label: "Best Practices" },
  { id: "implementation", label: "Implementation Steps" },
  { id: "challenges", label: "Common Challenges" },
  { id: "future", label: "Future Trends" },
  { id: "takeaways", label: "Key Takeaways" },
  { id: "conclusion", label: "Conclusion" },
  { id: "references", label: "References" },
];

const lifecycleStages = [
  { title: "Collection", desc: "Submissions, attendance, exams — data enters the system." },
  { title: "Processing", desc: "Marks entered, feedback added, reports generated." },
  { title: "Storage", desc: "Records held in databases or cloud platforms." },
  { title: "Sharing", desc: "Faculty, departments, accreditation, placements." },
  { title: "Retention", desc: "Decide how long records remain relevant." },
  { title: "Deletion", desc: "Securely archive or permanently remove old records." },
];

const takeaways = [
  { title: "Treat governance as essential", body: "Student records influence grades, progression, placements and trust — not an optional technical task." },
  { title: "Collect only what you need", body: "Unnecessary collection multiplies privacy risk and storage burden." },
  { title: "Layer your security", body: "Encryption, MFA, secure backups, regular updates — defence in depth." },
  { title: "Communicate clearly", body: "Students should know what is collected, why, by whom and for how long." },
  { title: "Train people, not just systems", body: "Faculty and staff awareness is as important as the technology stack." },
  { title: "Review continuously", body: "Policies must evolve with technology, expectations and risk." },
];

const references = [
  { n: "01", text: "UNESCO (2023). Guidance for generative AI in education and research.", url: "https://unesdoc.unesco.org/ark:/48223/pf0000386693" },
  { n: "02", text: "NIST (2024). Cybersecurity Framework (CSF) 2.0.", url: "https://www.nist.gov/cyberframework" },
  { n: "03", text: "OECD (2024). Education Policy Outlook 2024.", url: "https://doi.org/10.1787/75e40a16-en" },
  { n: "04", text: "Ifenthaler, D., & Schumacher, C. (2016). Student perceptions of privacy principles for learning analytics.", url: "https://doi.org/10.1007/s11423-016-9477-y" },
  { n: "05", text: "Williamson, B., & Eynon, R. (2020). AI in education: historical threads and directions.", url: "https://doi.org/10.1080/17439884.2020.1798995" },
  { n: "06", text: "Selwyn, N. (2020). Re-imagining learning analytics.", url: "https://doi.org/10.1016/j.iheduc.2020.100745" },
  { n: "07", text: "Kshetri, N., & Voas, J. (2022). Economics of AI in education systems.", url: "https://doi.org/10.1109/MITP.2022.3184567" },
  { n: "08", text: "IBM (2024). What is data governance?", url: "https://www.ibm.com/topics/data-governance" },
  { n: "09", text: "European Commission (2021). Ethics guidelines for trustworthy AI.", url: "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" },
  { n: "10", text: "World Economic Forum (2023). Shaping the future of learning.", url: "https://www.weforum.org/" },
];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-12 md:py-16">
      <Reveal>
        {eyebrow && <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">{eyebrow}</p>}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">{title}</h2>
        <div className="prose-content space-y-5 text-muted-foreground leading-relaxed text-[1.05rem]">
          {children}
        </div>
      </Reveal>
    </section>
  );
}

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Reveal>
      <div className="my-10 rounded-2xl overflow-hidden border border-border/50 glow">
        <img src={src} alt={alt} width={1280} height={720} loading="lazy" className="w-full h-auto object-cover" />
      </div>
    </Reveal>
  );
}

function Index() {
  const [openTakeaway, setOpenTakeaway] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />

      {/* Hero */}
      <header className="relative overflow-hidden min-h-[92vh] flex items-center">
        <img
          src={heroImg}
          alt="Abstract data governance shield with glowing data streams"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-primary" />
              Research Article · 14 min read
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] max-w-5xl">
              Data Governance & Protection in <span className="text-gradient">Performance-Based</span> Student Assessment Systems
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              How modern colleges can balance innovation with privacy, fairness and accountability as evaluation moves beyond the written exam.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Education", "Data Governance", "Cybersecurity", "EdTech", "Privacy"].map((t) => (
                <span key={t} className="px-4 py-1.5 rounded-full text-xs font-medium glass text-foreground/80">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-12 glass rounded-2xl p-6 max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Authors</p>
              <p className="text-foreground font-medium">Ayush Dhangar · Siddhi Purkar · Tanish Dhangar</p>
              <p className="text-sm text-muted-foreground mt-1">Students, Vishwakarma Institute of Technology (411037)</p>
            </div>
          </div>
        </div>

        <a href="#introduction" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Read</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse-glow" />
          </div>
        </a>
      </header>

      {/* Article body */}
      <main className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-12">
          <ChapterNav chapters={chapters} />

          <article className="max-w-3xl">
            <Section id="introduction" eyebrow="01 · Introduction" title="Beyond the written exam">
              <p>Education today is moving beyond the old model of relying mainly on written examinations. Many colleges and universities now assess students through projects, presentations, reports, portfolios, coding assignments, viva voce, internships, and practical tasks. These methods give faculty a clearer view of how well students can apply concepts in real-life situations rather than simply reproduce memorized answers.</p>
              <p>At the same time, these systems create a wide range of digital records — marks, attendance, teacher remarks, submission timelines, uploaded documents, revision history, and platform activity logs. Since this information can influence academic progress, placements, and institutional trust, it must be managed with care and responsibility.</p>
              <p>Strong governance helps maintain privacy, fairness, and accountability <em className="text-primary not-italic">(IBM, 2024)</em>.</p>
            </Section>

            <Section id="evolution" eyebrow="02 · Evolution" title="From memory to capability">
              <p>Traditional written examinations often measured performance only within a short period of time and mainly focused on memory-based answers. Modern methods aim to capture a wider range of student abilities — teamwork, communication, creativity, design thinking, leadership and practical problem-solving.</p>
              <p>As colleges adopt project-based and continuous evaluation methods, the quantity and variety of educational data grows significantly. Reports, presentations, coding submissions, peer reviews, attendance records and faculty feedback all become part of the assessment process.</p>
            </Section>

            <SectionImage src={evolutionImg} alt="Students working on digital assessments in a modern classroom" />

            <Section id="governance" eyebrow="03 · Definition" title="What is data governance?">
              <p>Data governance is the structured framework used to manage information throughout its lifecycle — policies, standards, responsibilities and controls that guide how data is collected, stored, accessed, updated, shared and deleted.</p>
              <p>In educational institutions, governance ensures that student information is handled carefully and only for legitimate academic purposes. It also helps assign responsibility so that errors, misuse or unauthorized access can be addressed quickly.</p>
            </Section>

            <Section id="importance" eyebrow="04 · Stakes" title="Why it matters in higher education">
              <p>Student records affect grades, progression decisions, scholarships, placements, internships and overall institutional trust. If these records are inaccurate or mishandled, students may face unfair consequences.</p>
              <p>Strong governance also improves confidence among students, parents, faculty and employers. When assessment systems are transparent and well managed, stakeholders trust the results.</p>
            </Section>

            <SectionImage src={lifecycleImg} alt="Abstract visualization of interconnected data lifecycle nodes" />

            {/* Interactive Lifecycle */}
            <Section id="lifecycle" eyebrow="05 · The Journey" title="The data lifecycle">
              <p>Assessment data passes through several stages. Hover or tap each stage to see what happens — and where things can go wrong if governance is missing.</p>
              <div className="not-prose mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {lifecycleStages.map((s, i) => (
                  <div
                    key={s.title}
                    className="group glass rounded-xl p-5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 cursor-default"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-xs font-mono text-primary">0{i + 1}</span>
                      <span className="w-2 h-2 rounded-full bg-primary group-hover:shadow-[0_0_12px_var(--teal)] transition-shadow" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-1.5">{s.title}</h4>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <SectionImage src={privacyImg} alt="Magnifying glass examining documents representing privacy and transparency" />

            <Section id="privacy" eyebrow="06 · Privacy" title="Concerns students raise">
              <p>Students may feel uncomfortable when excessive personal information is collected or when records are shared without proper justification. Privacy concerns increase when institutions monitor online activity too closely or fail to explain how information will be used.</p>
              <p>Colleges should collect only the data genuinely required for academic purposes. Clear notices should inform students about what is gathered, why it's needed, and how long it will be retained <em className="text-primary not-italic">(Ifenthaler & Schumacher, 2016)</em>.</p>
            </Section>

            <Section id="security" eyebrow="07 · Threats" title="Security threats facing institutions">
              <p>Educational databases are valuable targets for cyber threats because they contain sensitive records — marks, personal details and academic history. Weak passwords, phishing emails, malware and outdated software all create vulnerabilities.</p>
              <p>To reduce risk, colleges should use strong authentication, regular updates, encrypted storage and secure backups. Staff awareness training matters equally because many attacks begin through human error <em className="text-primary not-italic">(NIST, 2024)</em>.</p>

              <div className="not-prose mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { k: "Phishing", v: "Human-layer attack" },
                  { k: "Malware", v: "Software exploits" },
                  { k: "Weak Auth", v: "Password reuse" },
                  { k: "Old Stack", v: "Unpatched systems" },
                ].map((x) => (
                  <div key={x.k} className="glass rounded-lg p-4 text-center">
                    <p className="text-sm font-semibold text-foreground">{x.k}</p>
                    <p className="text-xs text-muted-foreground mt-1">{x.v}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="fairness" eyebrow="08 · Fairness" title="Fairness in evaluation">
              <p>Fairness is one of the most important principles in student assessment <em className="text-primary not-italic">(UNESCO, 2023)</em>. Clear rubrics, transparent marking criteria and moderation systems help ensure students are judged consistently.</p>
              <p>Without proper checks, different evaluators may apply different standards, leading to inconsistent outcomes. Bias may also arise when automated tools are used without review.</p>
            </Section>

            <SectionImage src={securityImg} alt="Digital shield with lock icon representing cybersecurity" />

            <Section id="ai" eyebrow="09 · AI" title="The role of artificial intelligence">
              <p>AI is increasingly used in education to support assessment <em className="text-primary not-italic">(Williamson & Eynon, 2020)</em> — originality checks, moderation alerts, grammar suggestions and feedback summaries. These tools may save time and improve efficiency when used responsibly.</p>
              <p>However, AI systems should be treated as support mechanisms rather than final decision-makers. Important judgments must remain under the supervision of qualified educators.</p>
            </Section>

            <SectionImage src={aiImg} alt="Hand reaching toward holographic brain representing AI in education" />

            <Section id="oversight" eyebrow="10 · Oversight" title="Why humans must stay in the loop">
              <p>Automated systems process data quickly but they are not free from error. Software may misinterpret context, overlook special circumstances or apply rules too rigidly. Human review provides judgment, contextual understanding and an additional layer of accountability that machines cannot replicate.</p>
            </Section>

            <Section id="transparency" eyebrow="11 · Transparency" title="Make the system legible">
              <p>Students should clearly understand how assessment systems operate — what is collected, why, how it's used, and who has access. Hidden procedures or unclear policies create doubt and mistrust.</p>
              <p>Transparency improves through clear notices, student handbooks, orientation sessions and accessible policy documents. Simple language often beats technical terms.</p>
            </Section>

            <Section id="retention" eyebrow="12 · Lifecycle" title="Retention and deletion">
              <p>Not all student records need to be stored permanently. Keeping unnecessary data for long periods increases storage costs and privacy risks. Retention schedules help institutions manage records systematically — once the approved period ends, data should be securely archived or permanently deleted.</p>
            </Section>

            <Section id="access" eyebrow="13 · Access" title="Access control & permissions">
              <p>Only authorized individuals should view or modify student information. Teachers may need access to marks for their classes; administrators may require limited access for academic management. Sensitive records — disciplinary matters, medical accommodations, confidential remarks — require stronger approval.</p>
              <p>Role-based permissions reduce accidental exposure and improve accountability. Activity logs help identify misuse when needed.</p>
            </Section>

            <Section id="ethics" eyebrow="14 · Duty" title="Legal and ethical responsibilities">
              <p>Privacy laws, cybersecurity regulations and academic policies often require organizations to protect personal information carefully <em className="text-primary not-italic">(European Commission, 2021)</em>. Beyond legal compliance, colleges should also consider fairness, dignity and responsible treatment of learners.</p>
              <p>A practice may be technically legal but still ethically questionable if it causes harm or confusion.</p>
            </Section>

            <Section id="vendors" eyebrow="15 · Vendors" title="Third-party platforms">
              <p>Many colleges rely on external platforms for learning management, assignment submission, online examinations and communication. Before adopting such services, institutions should verify whether vendors meet expected standards for privacy, security, reliability and confidentiality.</p>
              <p>Contracts should clearly define responsibilities. Records should be portable so they can be removed or transferred if the service changes.</p>
            </Section>

            {/* Case study spotlight */}
            <Section id="case-study" eyebrow="16 · Field Notes" title="A college portfolio system">
              <div className="not-prose glass rounded-2xl p-6 md:p-8 border-l-4 border-primary glow">
                <p className="text-foreground/90 leading-relaxed">A college introduced a digital portfolio assessment system across multiple departments. Students uploaded reports, presentations, coding work, design files and project evidence online. Many appreciated the faster submission process and reduced paperwork.</p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-destructive mb-2">⚠ Problems found</p>
                    <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
                      <li>Wider staff access than necessary</li>
                      <li>Policy notices unclear to students</li>
                      <li>Originality alerts opaque</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary mb-2">✓ Corrective measures</p>
                    <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
                      <li>Permissions revised per role</li>
                      <li>Policies rewritten in plain language</li>
                      <li>Manual review of automated alerts</li>
                    </ul>
                  </div>
                </div>
                <p className="text-foreground/90 mt-6 italic border-t border-border pt-4">
                  "Successful digital assessment depends not only on software, but also on governance, communication and accountability."
                </p>
              </div>
            </Section>

            <Section id="best-practices" eyebrow="17 · Practice" title="Best practices">
              <p>Use encryption to protect sensitive records on devices, servers and cloud platforms. Multi-factor authentication reduces unauthorized access. Regular backups help restore systems after technical failure or cyber incidents.</p>
              <p>Train faculty, administrators and support staff so they understand privacy responsibilities. Audit permissions, storage methods and operational processes periodically — not only after problems occur.</p>
            </Section>

            <Section id="implementation" eyebrow="18 · Roadmap" title="Implementation steps">
              <ol className="not-prose space-y-3 mt-4">
                {[
                  "Review existing institutional policies on data, assessment and platforms.",
                  "Map how student information moves through the system end-to-end.",
                  "Classify records by sensitivity; assign access permissions accordingly.",
                  "Train faculty and administrative teams on privacy and security.",
                  "Monitor performance, gather feedback, and review controls continuously.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 glass rounded-xl p-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/15 text-primary font-semibold flex items-center justify-center text-sm">
                      {i + 1}
                    </span>
                    <p className="text-foreground/90 leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </Section>

            <Section id="challenges" eyebrow="19 · Reality" title="Common challenges">
              <p>Many institutions face practical barriers <em className="text-primary not-italic">(World Economic Forum, 2023)</em>. Limited budgets prevent investment in secure platforms. Smaller institutions struggle to allocate resources. There's often a shortage of trained personnel who understand both education and data management.</p>
              <p>Resistance to change can also slow progress. Information stored across disconnected systems makes coordination difficult. Integrated planning and gradual improvement help.</p>
            </Section>

            <Section id="future" eyebrow="20 · Horizon" title="Future trends">
              <p>Educational assessment is expected to become more data-driven <em className="text-primary not-italic">(OECD, 2024)</em>. Learning analytics can identify student progress patterns and support needs. Adaptive systems may adjust difficulty in real time.</p>
              <p>While these innovations improve efficiency, they also increase the volume of sensitive information processed. Stronger governance frameworks will be necessary to manage privacy, fairness and accountability.</p>
            </Section>

            <SectionImage src={futureImg} alt="Futuristic holographic dashboard showing student analytics" />

            {/* Interactive takeaways */}
            <Section id="takeaways" eyebrow="21 · Recap" title="Key takeaways">
              <p>Click any card to expand. The shortlist for any institution serious about modern assessment.</p>
              <div className="not-prose mt-8 space-y-3">
                {takeaways.map((t, i) => {
                  const open = openTakeaway === i;
                  return (
                    <button
                      key={t.title}
                      onClick={() => setOpenTakeaway(open ? null : i)}
                      className={`w-full text-left glass rounded-xl p-5 transition-all duration-300 hover:border-primary/50 ${open ? "border-primary/50 glow" : ""}`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span className="text-primary font-mono text-sm">{String(i + 1).padStart(2, "0")}</span>
                          <h4 className="text-lg font-semibold text-foreground">{t.title}</h4>
                        </div>
                        <span className={`text-primary text-2xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
                      </div>
                      <div
                        className="grid transition-all duration-500 ease-out"
                        style={{ gridTemplateRows: open ? "1fr" : "0fr", marginTop: open ? "0.75rem" : 0 }}
                      >
                        <div className="overflow-hidden">
                          <p className="text-muted-foreground pl-10 leading-relaxed">{t.body}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </Section>

            <Section id="conclusion" eyebrow="22 · Closing" title="Conclusion">
              <p>Performance-based assessment can genuinely improve learning — it evaluates practical understanding, problem-solving, communication and continuous progress rather than memorization alone. From a student perspective, a fair and secure system increases confidence, motivation and trust in academic results.</p>
              <p>The success of these systems depends greatly on how responsibly student information is managed. Privacy protection, secure infrastructure, fair evaluation and transparent communication are essential.</p>
              <p className="text-foreground text-lg font-medium border-l-2 border-primary pl-5 mt-8">
                Institutions that combine innovation with responsibility will be better prepared for the future.
              </p>
            </Section>

            <Section id="references" eyebrow="23 · Sources" title="References (APA 7th)">
              <ol className="not-prose space-y-2 mt-4">
                {references.map((r) => (
                  <li key={r.n} className="flex gap-4 text-sm group">
                    <span className="text-primary font-mono flex-shrink-0">{r.n}</span>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                    >
                      {r.text}
                    </a>
                  </li>
                ))}
              </ol>
            </Section>
          </article>
        </div>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ayush Dhangar · Siddhi Purkar · Tanish Dhangar</p>
          <p>Vishwakarma Institute of Technology · Pune 411037</p>
        </div>
      </footer>
    </div>
  );
}
