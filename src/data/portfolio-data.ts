"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  BookMarked,
} from "lucide-react";

const ACCENT = "#1658cd";

export default function Page() {
  const data = {
    name: "Swapnil Biswas",
    role: "Graduate Research Assistant • CVIP Lab (SIUE)",
    tagline: "Machine Learning · Computer Vision · Medical Imaging · Data Mining",
    location: "Maryville, IL 62062, USA",
    phone: "+1 (636) 517 7120",
    email: "sbiswas@siue.edu",
    links: {
      linkedin: "https://www.linkedin.com/in/swapnil-biswas-6447b5218",
      scholar: "https://scholar.google.com/citations?user=-BgBK3kAAAAJ&hl=en&authuser=1",
      website: "https://cviptools.siue.edu/",
      portfolio: "https://biswas-swapnil.vercel.app/",
    },
    about:
      "Graduate Research Assistant at the CVIP Lab while pursuing an M.S. in Electrical and Computer Engineering at Southern Illinois University Edwardsville. Strong background in CSE (UIU). I work across ML, CV, NLP, and Data Mining, focused on building practical, high-impact systems.",
    interests: ["Deep Learning", "Medical Image Analysis", "Computer Vision", "Image Processing"],
  };

  const Section = ({ title, children }) => (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-5 w-1.5 rounded-full" style={{ background: ACCENT }} />
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );

  const Pill = ({ children }) => (
    <span
      className="px-3 py-1 rounded-full text-xs md:text-sm border"
      style={{ borderColor: ACCENT, color: ACCENT }}
    >
      {children}
    </span>
  );

  const LinkPill = ({ href, children }) => (
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

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full" style={{ background: ACCENT }} />
            <span className="font-semibold">{data.name}</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm">
            {[["about", "About"], ["contact", "Contact"]].map(([id, label]) => (
              <a key={id} href={`#${id}`} className="hover:opacity-70">
                {label}
              </a>
            ))}
            <a href={data.links.website} target="_blank" rel="noreferrer" className="ml-2">
              <button
                className="border rounded-2xl px-3 py-1 text-sm"
                style={{ borderColor: ACCENT, color: ACCENT }}
              >
                CVIP Lab
              </button>
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16" id="about">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{data.name}</h1>
        <p className="text-base md:text-lg text-neutral-700">{data.role}</p>
        <p className="text-sm md:text-base text-neutral-600 max-w-3xl mt-2">{data.about}</p>

        <div className="flex flex-wrap gap-2 pt-4">
          {data.interests.map((i) => (
            <Pill key={i}>{i}</Pill>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
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
      </section>

      <Section title="Contact">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4" id="contact">
          <div>
            <p className="text-sm text-neutral-700">Email: {data.email}</p>
            <p className="text-sm text-neutral-700">Phone: {data.phone}</p>
            <p className="text-sm text-neutral-700">Location: {data.location}</p>
          </div>
          <a
            href={data.links.website}
            target="_blank"
            rel="noreferrer"
            className="underline text-sm"
            style={{ color: ACCENT }}
          >
            Visit CVIP Lab Website
          </a>
        </div>
      </Section>

      <footer className="border-t mt-10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-neutral-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} {data.name}. All rights reserved.</span>
          <a href={data.links.portfolio} className="underline" style={{ color: ACCENT }}>
            {data.links.portfolio}
          </a>
        </div>
      </footer>
    </main>
  );
}
