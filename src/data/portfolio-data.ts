// src/components/portfolio-content.tsx
"use client";

import React, { PropsWithChildren } from "react";
import {
  Mail, Phone, MapPin, Linkedin, GraduationCap,
  BookOpen, Briefcase, Code2, ExternalLink, ArrowRight, BookMarked
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { portfolioData as data, ACCENT } from "@/data/portfolio-data";

type SectionProps = PropsWithChildren<{ id: string; title: string }>;

const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-5 w-1.5 rounded-full" style={{ background: ACCENT }} />
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
    <div className="space-y-3">{children}</div>
  </section>
);

const Pill: React.FC<PropsWithChildren> = ({ children }) => (
  <span className="px-3 py-1 rounded-full text-xs md:text-sm border" style={{ borderColor: ACCENT, color: ACCENT }}>
    {children}
  </span>
);

const LinkPill: React.FC<PropsWithChildren<{ href: string }>> = ({ href, children }) => (
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

export default function PortfolioContent() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
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
            <a href={data.links.website} target="_blank" rel="noreferrer" className="ml-2">
              <Button variant="outline" style={{ borderColor: ACCENT, color: ACCENT }}>
                Portfolio
              </Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14" id="about">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{data.name}</h1>
            <p className="text-base md:text-lg text-neutral-700">{data.role}</p>
            <p className="text-sm md:text-base text-neutral-600 max-w-2xl">{data.about}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {data.interests.map((i) => <Pill key={i}>{i}</Pill>)}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <LinkPill href={`mailto:${data.email}`}><Mail className="h-4 w-4" /> {data.email}</LinkPill>
              <Pill><Phone className="h-4 w-4 inline mr-1" /> {data.phone}</Pill>
              <Pill><MapPin className="h-4 w-4 inline mr-1" /> {data.location}</Pill>
              <LinkPill href={data.links.linkedin}><Linkedin className="h-4 w-4" /> LinkedIn</LinkPill>
              <LinkPill href={data.links.scholar}><BookMarked className="h-4 w-4" /> Google Scholar</LinkPill>
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

      {/* Education */}
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
                    <Badge variant="outline" style={{ borderColor: ACCENT, color: ACCENT }}>{e.period}</Badge>
                    {e.detail && <span>• {e.detail}</span>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Research */}
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
                    {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Experience */}
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
                    {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Publications */}
        <Section id="publications" title="Publications">
          <div className="space-y-3">
            {data.publications.map((pub) => (
              <Card key={pub.title} className="border-0 shadow-sm">
                <CardContent className="py-4">
                  <div className="text-sm md:text-base font-medium">{pub.title}</div>
                  <div className="text-xs md:text-sm text-neutral-700">{pub.authors}</div>
                  <div className="text-xs text-neutral-600 mt-1">{pub.where}</div>
                  <div className="mt-2">
                    <a href={pub.doi} target="_blank" rel="noreferrer" className="text-xs md:text-sm underline" style={{ color: ACCENT }}>
                      {pub.doi}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Projects */}
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

        {/* Contact */}
        <Section id="contact" title="Contact & Extras">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg">Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>
                  <Mail className="h-4 w-4 inline mr-2" />
                  <a href={`mailto:${data.email}`} className="underline" style={{ color: ACCENT }}>{data.email}</a>
                </div>
                <div><Phone className="h-4 w-4 inline mr-2" /> {data.phone}</div>
                <div><MapPin className="h-4 w-4 inline mr-2" /> {data.location}</div>
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

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-neutral-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} {data.name}. All rights reserved.</span>
          <a href={data.links.website} className="underline" style={{ color: ACCENT }}>
            {data.links.website}
          </a>
        </div>
      </footer>
    </main>
  );
}
