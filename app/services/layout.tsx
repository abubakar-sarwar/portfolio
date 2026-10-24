import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Muhammad Abu Bakar — Software Engineer",
  description:
    "Muhammad Abu Bakar offers full-stack web development, API engineering, AI integration, performance optimization, and technical consulting services.",
  alternates: {
    canonical: "https://abubakarsarwar.vercel.app/services",
  },
  openGraph: {
    title: "Services | Muhammad Abu Bakar — Software Engineer",
    description:
      "Muhammad Abu Bakar offers full-stack web development, API engineering, AI integration, performance optimization, and technical consulting services.",
    url: "https://abubakarsarwar.vercel.app/services",
    type: "website",
    images: ["/assets/abubakarsarwar.png"],
    siteName: "Muhammad Abu Bakar | Software Engineer Portfolio",
    locale: "en_US",
  },
  keywords: [
    "Muhammad Abu Bakar",
    "Web Development Services",
    "Full-Stack Developer for hire",
    "Next.js Developer",
    "Node.js Developer",
    "API Development",
    "AI Integration",
    "Freelance Software Engineer",
    "React Developer",
    "Performance Optimization",
  ],
};

const serviceListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Software Engineering Services by Muhammad Abu Bakar",
  "url": "https://abubakarsarwar.vercel.app/services",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Full-Stack Web Development",
        "description":
          "End-to-end web applications built with Next.js, React, Node.js, and MongoDB.",
        "provider": { "@type": "Person", "name": "Muhammad Abu Bakar" },
      },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "API Design & Backend Engineering",
        "description":
          "RESTful and real-time APIs built with Node.js, Nest.js, and Express.",
        "provider": { "@type": "Person", "name": "Muhammad Abu Bakar" },
      },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Responsive UI / UX Implementation",
        "description":
          "Pixel-perfect, cross-device interfaces with smooth animations and accessibility-first design.",
        "provider": { "@type": "Person", "name": "Muhammad Abu Bakar" },
      },
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "AI Integration",
        "description":
          "LLM-powered features using OpenAI, OpenRouter, and LangChain.",
        "provider": { "@type": "Person", "name": "Muhammad Abu Bakar" },
      },
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Performance Optimization",
        "description":
          "Auditing and improving Core Web Vitals, load times, and rendering performance.",
        "provider": { "@type": "Person", "name": "Muhammad Abu Bakar" },
      },
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "name": "Consultation & Code Review",
        "description":
          "Architecture reviews, tech stack guidance, and code audits for teams.",
        "provider": { "@type": "Person", "name": "Muhammad Abu Bakar" },
      },
    },
  ],
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://abubakarsarwar.vercel.app/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://abubakarsarwar.vercel.app/services",
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceListLd).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
