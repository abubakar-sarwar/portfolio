import type { Metadata } from "next";
import { WithContext, AboutPage as AboutPageSchema } from "schema-dts";

export const metadata: Metadata = {
  title: "About | Muhammad Abu Bakar — Software Engineer",
  description:
    "Muhammad Abu Bakar is a Software Engineer with 3+ years of experience building scalable web apps using Next.js, Node.js, Nest.js, React, TypeScript, and MongoDB.",
  alternates: {
    canonical: "https://abubakarsarwar.vercel.app/about",
  },
  openGraph: {
    title: "About Muhammad Abu Bakar — Software Engineer",
    description:
      "Muhammad Abu Bakar is a Software Engineer with 3+ years of experience building scalable web apps using Next.js, Node.js, Nest.js, React, TypeScript, and MongoDB.",
    url: "https://abubakarsarwar.vercel.app/about",
    type: "website",
    images: ["/assets/abubakarsarwar.png"],
    siteName: "Muhammad Abu Bakar | Software Engineer Portfolio",
    locale: "en_US",
  },
  keywords: [
    "Muhammad Abu Bakar",
    "About Muhammad Abu Bakar",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "Node.js Developer",
    "React Developer",
    "Epazz",
    "Lahore Pakistan Developer",
  ],
};

const aboutPageLd: WithContext<AboutPageSchema> = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "url": "https://abubakarsarwar.vercel.app/about",
  "name": "About Muhammad Abu Bakar — Software Engineer",
  "description":
    "Muhammad Abu Bakar is a Software Engineer with 3+ years of experience building scalable web applications using Next.js, Node.js, Nest.js, React, TypeScript, and MongoDB.",
  "inLanguage": "en-US",
  "isAccessibleForFree": true,
  "author": {
    "@type": "Person",
    "name": "Muhammad Abu Bakar",
    "url": "https://abubakarsarwar.vercel.app/",
    "image": "https://abubakarsarwar.vercel.app/assets/abubakarsarwar.png",
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Epazz, Inc",
      "url": "https://www.epazz.com",
    },
    "sameAs": [
      "https://www.linkedin.com/in/muhammad-abubakar-b238a5298",
      "https://github.com/abubakar-sarwar",
    ],
  },
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
        "name": "About",
        "item": "https://abubakarsarwar.vercel.app/about",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageLd).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
