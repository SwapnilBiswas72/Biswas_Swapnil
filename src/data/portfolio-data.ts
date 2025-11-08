import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
  FlaskConical as Beaker,
  Code2,
  ExternalLink,
  ArrowRight,
  BookMarked,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Accent colour pulled from your LaTeX theme (#1658cd)
const ACCENT = "#1658cd";

// ------------------- DATA ------------------- //
const data = {
  name: "Swapnil Biswas",
  role: "Graduate Research Assistant • CVIP Lab (SIUE)",
  tagline:
    "Machine Learning · Computer Vision · Medical Imaging · Data Mining",
  location: "Maryville, IL 62062, USA",
  phone: "+1 (636) 517 7120",
  email: "sbiswas@siue.edu",
  links: {
    linkedin: "https://www.linkedin.com/in/swapnil-biswas-6447b5218",
    scholar:
      "https://scholar.google.com/citations?user=-BgBK3kAAAAJ&hl=en&authuser=1",
    website: "https://biswas-swapnil.vercel.app/",
  },
  about:
    "Graduate Research Assistant at the CVIP Lab while pursuing an M.S. in Electrical and Computer Engineering at Southern Illinois University Edwardsville. Strong background in CSE (UIU). I work across ML, CV, NLP, and Data Mining, focused on building practical, high‑impact systems.",
  interests: [
    "Deep Learning",
    "Medical Image Analysis",
    "Computer Vision",
    "Image Processing",
  ],
  education: [
    {
      period: "2024 – Present",
      degree: "M.S. in Electrical and Computer Engineering",
      institution: "Southern Illinois University Edwardsville (SIUE)",
      detail: "CGPA 3.83/4.00 · Completed 18/33 credits",
    },
    {
      period: "2019 – 2023",
      degree: "B.Sc. in Computer Science and Engineering (Top 2%)",
      institution: "United International University (UIU), Dhaka, Bangladesh",
      detail: "CGPA 3.88/4.00",
    },
    {
      period: "2016 – 2018",
      degree: "Higher Secondary Certificate",
      institution: "Dhaka City College, Dhaka, Bangladesh",
      detail: "GPA 5.00/5.00",
    },
  ],
  researchExperience: [
    {
      role: "Graduate Research Assistant",
      org: "CVIP Lab, Southern Illinois University Edwardsville",
      period: "Aug 2024 – Present",
      bullets: [
        "Enhanced skin‑lesion segmentation using SAM & MedSAM with transfer learning for downstream CNNs.",
        "Mitigated class imbalance via Conditional Variational Autoencoder (CVAE) improving VGG‑16 classification.",
        "Modernized CVIP software stack by replacing ONCRPC with FlatBuffers for 32/64‑bit robustness.",
        "Developed hybrid image‑enhancement for thermographic detection of canine bone cancer.",
      ],
    },
    {
      role: "Research Engineer",
      org: "Institute for Advanced Research, United International University",
      period: "Mar 2023 – Aug 2024",
      bullets: [
        "Led RIC funding submission: real‑time agri recommender for rural farmers (productivity & sustainability).",
        "Co‑created CKD dataset with physicians for early risk stratification.",
        "Benchmarked GNN vs classical ML for protein secondary structure prediction; documented trade‑offs.",
      ],
    },
  ],
  professional: [
    {
      role: "Graduate Teaching Assistant",
      org: "Southern Illinois University Edwardsville",
      period: "Summer 2025 – Present",
      bullets: [
        "Support labs, grading, and student mentoring across undergraduate courses.",
      ],
    },
    {
      role: "Junior Software Developer",
      org: "Amirus, Dhaka",
      period: "2023 – 2024",
      bullets: [
        "Shipped features, fixed defects, and wrote unit tests within Agile sprints.",
      ],
    },
    {
      role: "Undergraduate Teaching Assistant & Grader",
      org: "United International University",
      period: "2021 – 2023",
      bullets: [
        "Graded assignments, assisted labs, and held counseling hours.",
      ],
    },
  ],
  publications: [
    {
      title:
        "Advancing Skin Lesion Classification: The Role of SAM‑Based Segmentation in Enhancing CNN Performance",
      authors:
        "S. Biswas, S. M. M. Raza, T. H. Nguyen, R. W. LeAnder, S. E. Umbaugh",
      where:
        "Proc. SPIE 13605, Applications of Digital Image Processing XLVIII, 2025 – San Diego, CA",
      doi: "https://doi.org/10.1117/12.3065735",
    },
    {
      title:
        "LVM‑Med‑Based Thermographic Image Analysis for Canine Bone Cancer Detection",
      authors: "S. M. M. Raza, S. Biswas, R. W. LeAnder, S. E. Umbaugh",
      where: "Proc. SPIE 13605, 2025",
      doi: "https://doi.org/10.1117/12.3060176",
    },
    {
      title:
        "Hybrid Image Enhancement for Thermographic Imaging in Canine Bone Cancer Detection",
      authors: "M. S. U. Hoque, S. Biswas, M. S. Sakib, R. LeAnder, S. E. Umbaugh",
      where: "Thermosense XLVII, Proc. SPIE 13470 (2025) 156–164",
      doi: "https://doi.org/10.1117/12.3053308",
    },
    {
      title:
        "Analysis of MDE‑Based Gamification Framework for Cognitive Evaluation",
      authors:
        "M. Islam, S. Biswas, M. S. Ahmed, M. J. Rahman, A. R. Hasan, A. Amin, et al.",
      where: "34th IEEE ICCTA, 2024",
      doi: "https://doi.org/10.1109/ICCTA64612.2024.10974770",
    },
    {
      title:
        "A Bidirectional Siamese RNN for Accurate Gait Recognition",
      authors: "P. H. Progga, M. J. Rahman, S. Biswas, et al.",
      where: "Neurocomputing, 605 (2024) 128313",
      doi: "https://doi.org/10.1016/j.neucom.2024.128313",
    },
    {
      title: "CropCare: Intelligent Advisory System",
      authors: "M. J. Rahman, M. S. Ahmed, S. Biswas, et al.",
      where: "IEEE ICEEICT, 2024",
      doi: "https://doi.org/10.1109/ICEEICT62016.2024.10534582",
    },
    {
      title: "Predicting Efficient CPU Scheduling Algorithm",
      authors: "S. Biswas, M. S. Ahmed, et al.",
      where: "IEEE STI, 2023",
      doi: "https://doi.org/10.1109/STI59863.2023.10464816",
    },
    {
      title: "Informative Instance‑Based KNN for Big Data",
      authors: "P. H. Progga, M. J. Rahman, S. Biswas, et al.",
      where: "IEEE I2CT, 2023",
      doi: "https://doi.org/10.1109/I2CT57861.2023.10126147",
    },
    {
      title:
        "Machine Learning for Load Forecasting in Green Data Centers",
      authors: "M. S. Ahmed, S. Biswas, et al.",
      where: "IEEE STI, 2022",
      doi: "https://doi.org/10.1109/STI56238.2022.10103320",
    },
  ],
  projects: [
    {
      title: "Protibaad",
      kind: "Industry Project",
      description:
        "Crime alerts, missing‑person reports, and community surveys/blog to elevate public safety.",
      stack: ["PHP", "MySQL", "HTML", "JavaScript", "Bootstrap"],
    },
    {
      title: "Learn & Share",
      kind: "Industry Project",
      description:
        "Student support portal: tutorials across subjects, exam resources, discussions, note sharing, and simulations.",
      stack: ["PHP", "MySQL", "HTML", "JavaScript", "Bootstrap"],
    },
    {
      title: "Online Food Ordering System",
      kind: "Industry Project",
      description:
        "Java + JavaFX client/server with sockets and multi‑threading for real‑time ordering and tracking.",
      stack: ["Java", "JavaFX", "Sockets", "Multithreading"],
    },
  ],
  honors: [
    "Research Grants for Graduate Students (RGGS) – SIUE",
    "Competitive Graduate Award (CGA) – SIUE",
    "Research Grant – Institute for Advanced Research, UIU",
    "University Merit Scholarship (2019–2023) – UIU",
    "Magna Cum Laude – UIU (2024)",
    "Runner‑Up – CSE Project Show, UIU (May 2022)",
  ],
  extra: [
    "President, Bangladesh Student Association (BSA), SIUE",
    "Medical Imaging Campaign Volunteer",
    "Computer Literacy Teacher for rural students",
    "Organised departmental academic tours",
    "Research data collection across universities",
  ],
};

// ------------------- UI SECTIONS ------------------- //
const Section = ({ id, title, children }: React.PropsWithChildren<{ id: string; title: string }>) => (
  <section id={id} className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-5 w-1.5 rounded-full" style={{ background: ACCENT }} />
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
    <div className="space-y-3">{children}</div>
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 rounded-full text-xs md:text-sm border" style={{ borderColor: ACCENT, color: ACCENT }}>
    {children}
  </span>
);

const LinkPill = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs md:text-sm border hover:opacity-90 transition"
    style={{ borderColor: ACCENT, color: ACCENT }}
  >
    {children} <ExternalLink className="h-3 w-3" />
  </a>
);

// ------------------- PAGE ------------------- //
export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Sticky nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full" style={{ background: ACCENT }} />
            <span className="font-semibold">{data.name}</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm">
            {[
              ["about", "About"],
              ["education", "Education"],
              ["research", "Research"],
              ["experience", "Experience"],
              ["publications", "Publications"],
              ["projects", "Projects"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} className="hover:opacity-70">
                {label}
              </a>
            ))}
            <a
              href={data.links.website}
              target="_blank"
              rel="noreferrer"
              className="ml-2"
            >
              <Button variant="outline" style={{ borderColor: ACCENT, color: ACCENT }}>
                Portfolio
              </Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {data.name}
            </h1>
            <p className="text-base md:text-lg text-neutral-700">{data.role}</p>
            <p className="text-sm md:text-base text-neutral-600 max-w-2xl">
              {data.about}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {data.interests.map((i) => (
                <Pill key={i}>{i}</Pill>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <LinkPill href={`mailto:${data.email}`}>
                <Mail className="h-4 w-4" /> {data.email}
              </LinkPill>
              <Pill>
                <Phone className="h-4 w-4 inline mr-1" /> {data.phone}
              </Pill>
              <Pill>
                <MapPin className="h-4 w-4 inline mr-1" /> {data.location}
              </Pill>
              <LinkPill href={data.links.linkedin}>
                <Linkedin className="h-4 w-4" /> LinkedIn
              </LinkPill>
              <LinkPill href={data.links.scholar}>
                <BookMarked className="h-4 w-4" /> Google Scholar
              </LinkPill>
            </div>
          </div>
          <div className="md:col-span-1">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <a href="#publications" className="inline-flex items-center gap-2 hover:opacity-80">
                  <BookOpen className="h-4 w-4" /> Publications <ArrowRight className="h-3 w-3" />
                </a>
                <a href="#projects" className="inline-flex items-center gap-2 hover:opacity-80">
                  <Code2 className="h-4 w-4" /> Projects <ArrowRight className="h-3 w-3" />
                </a>
                <a href="#experience" className="inline-flex items-center gap-2 hover:opacity-80">
                  <Briefcase className="h-4 w-4" /> Experience <ArrowRight className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* About/Education */}
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-12">
        <Section id="education" title="Education">
          <div className="grid md:grid-cols-3 gap-4">
            {data.education.map((e) => (
              <Card key={e.degree} className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base md:text-lg flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" /> {e.degree}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-700">{e.institution}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-neutral-600">
                    <Badge variant="outline" style={{ borderColor: ACCENT, color: ACCENT }}>
                      {e.period}
                    </Badge>
                    {e.detail && <span>• {e.detail}</span>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="research" title="Research Experience">
          <div className="space-y-4">
            {data.researchExperience.map((r) => (
              <Card key={r.role} className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base md:text-lg">
                    {r.role} — <span className="text-neutral-600">{r.org}</span>
                  </CardTitle>
                  <div className="text-xs text-neutral-600">{r.period}</div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-800">
                    {r.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Professional Experience">
          <div className="space-y-4">
            {data.professional.map((p) => (
              <Card key={p.role} className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base md:text-lg">
                    {p.role} — <span className="text-neutral-600">{p.org}</span>
                  </CardTitle>
                  <div className="text-xs text-neutral-600">{p.period}</div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-800">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="publications" title="Publications">
          <div className="space-y-3">
            {data.publications.map((pub) => (
              <Card key={pub.title} className="border-0 shadow-sm">
                <CardContent className="py-4">
                  <div className="text-sm md:text-base font-medium">{pub.title}</div>
                  <div className="text-xs md:text-sm text-neutral-700">{pub.authors}</div>
                  <div className="text-xs text-neutral-600 mt-1">{pub.where}</div>
                  <div className="mt-2">
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs md:text-sm underline"
                      style={{ color: ACCENT }}
                    >
                      {pub.doi}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-3 gap-4">
            {data.projects.map((pr) => (
              <Card key={pr.title} className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base md:text-lg">{pr.title}</CardTitle>
                  <div className="text-xs text-neutral-600">{pr.kind}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-800">{pr.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {pr.stack.map((s) => (
                      <Badge key={s} variant="outline" style={{ borderColor: ACCENT, color: ACCENT }}>
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact & Extras">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg">Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>
                  <Mail className="h-4 w-4 inline mr-2" />
                  <a href={`mailto:${data.email}`} className="underline" style={{ color: ACCENT }}>
                    {data.email}
                  </a>
                </div>
                <div>
                  <Phone className="h-4 w-4 inline mr-2" /> {data.phone}
                </div>
                <div>
                  <MapPin className="h-4 w-4 inline mr-2" /> {data.location}
                </div>
                <div className="flex gap-2 pt-2">
                  <a href={data.links.linkedin} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" style={{ borderColor: ACCENT, color: ACCENT }}>
                      <Linkedin className="h-4 w-4 mr-1" /> LinkedIn
                    </Button>
                  </a>
                  <a href={data.links.scholar} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" style={{ borderColor: ACCENT, color: ACCENT }}>
                      <BookMarked className="h-4 w-4 mr-1" /> Scholar
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg">Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {data.honors.map((h) => (
                    <Badge key={h} variant="outline" style={{ borderColor: ACCENT, color: ACCENT }}>
                      {h}
                    </Badge>
                  ))}
                </div>
                <Separator className="my-3" />
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {data.extra.map((x) => (
                    <div key={x} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-neutral-600 flex items-center justify-between">
          <span>
            © {new Date().getFullYear()} {data.name}. All rights reserved.
          </span>
          <a href={data.links.website} className="underline" style={{ color: ACCENT }}>
            {data.links.website}
          </a>
        </div>
      </footer>
    </main>
  );
}
