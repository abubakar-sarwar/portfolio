import Nav from "@/app/_components/nav";
import Footer from "@/app/_components/footer";
import type { Metadata, Viewport } from "next";
import { Person, WebPage, WithContext } from "schema-dts";
import { Analytics } from "@vercel/analytics/next";
import CursorCircle from "@/app/_components/cursorCircle";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/css/styles.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "white",
};

const description =
  "Muhammad Abu Bakar — Software Engineer specializing in Next.js, Node.js & Nest.js. Building fast, scalable web apps and modern digital experiences.";
export const metadata: Metadata = {
  manifest: "https://abubakarsarwar.vercel.app/manifest.json",
  title: "Muhammad Abu Bakar | Software Engineer Portfolio",
  description,
  authors: [{ name: "Muhammad Abu Bakar" }],
  creator: "Muhammad Abu Bakar",
  publisher: "Muhammad Abu Bakar",
  applicationName: "Muhammad Abu Bakar | Software Engineer Portfolio",
  keywords: [
    "Muhammad Abu Bakar",
    "Software Engineer",
    "Full-Stack Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Software Engineer Portfolio",
    "Freelance Web Developer",
    "Best Next.js developer",
    "Best Node.js developer",
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "LangChain",
    "OpenRouter",
    "OpenAI",
    "Redis",
    "JavaScript",
    "TypeScript",
    "Tailwindcss",
    "Laravel",
  ],
  icons: ["/assets/logo.png"],
  metadataBase: new URL("https://abubakarsarwar.vercel.app/"),
  openGraph: {
    title: "Muhammad Abubakar",
    description,
    images: ["/assets/abubakarsarwar.png"],
    type: "website",
    url: new URL("https://abubakarsarwar.vercel.app/"),
    siteName: "Muhammad Abu Bakar | Software Engineer Portfolio",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://abubakarsarwar.vercel.app/",
  },
  verification: {
    google: "gE7GnlftzkGuv9V-kio2naQ4VRL8Zac8GtRQccC-AV0"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Abu Bakar",
    "jobTitle": "Software Engineer",
    "affiliation": {
      "@type": "CollegeOrUniversity",
      "name": "University of Engineering and Technology, Lahore"
    },
    "knowsAbout": [
      "Software Engineer",
      "Full Stack Developer",
      "MERN Stack Developer",
      "Artificial Intelligence",
      "Machine Learning",
      "Web Development"
    ],
    "url": "https://abubakarsarwar.vercel.app",
    "image": "https://abubakarsarwar.vercel.app/assets/abubakarsarwar.png",
    "description":
      "I'm Muhammad Abu Bakar, a Software Engineer who builds fast, scalable, and user-friendly web applications. I specialize in turning ideas into powerful, modern digital experiences.",
    "sameAs": [
      "https://www.linkedin.com/in/muhammad-abubakar-b238a5298",
      "https://github.com/abubakar-sarwar",
      "https://www.instagram.com/web_dev_pk"
    ],
    "gender": "Male",
    "worksFor": {
      "@type": "Organization",
      "name": "Epazz, Inc",
      "url": "https://www.epazz.com"
    },
    "workLocation": {
      "@type": "Place",
      "name": "Epazz Inc",
      "url": "https://www.epazz.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Block J3 Phase 2 Johar Town",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "addressCountry": "Pakistan"
      }
    },
    "nationality": {
      "@type": "Country",
      "name": "Pakistan"
    },
    "skills": [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "LangChain",
      "OpenRouter",
      "OpenAI",
      "Redis",
      "RabbitMQ",
      "JavaScript",
      "TypeScript",
      "Tailwindcss",
      "Laravel",
      "My SQL",
      "GSAP"
    ],
    "knowsLanguage": ["English", "Urdu", "Hindi"]
  };

  const webPageLd: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://abubakarsarwar.vercel.app/",
    "name": "Muhammad Abu Bakar | Software Engineer Portfolio",
    "description": "Muhammad Abu Bakar — Software Engineer specializing in Next.js, Node.js & Nest.js. Building fast, scalable web apps and modern digital experiences.",
    "datePublished": "2024-01-24",
    "dateModified": "2026-10-06",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "author": {
      "@type": "Person",
      "name": "Muhammad Abu Bakar",
      "url": "https://abubakarsarwar.vercel.app/",
    },
    "creator": {
      "@type": "Person",
      "name": "Muhammad Abu Bakar",
    },
    "publisher": {
      "@type": "Person",
      "name": "Muhammad Abu Bakar",
      "url": "https://abubakarsarwar.vercel.app/",
    },
    "image": "https://abubakarsarwar.vercel.app/assets/abubakarsarwar.png",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://abubakarsarwar.vercel.app/assets/abubakarsarwar.png",
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
      ],
    },
    "mainEntity": {
      "@type": "Person",
      "name": "Muhammad Abu Bakar",
      "url": "https://abubakarsarwar.vercel.app/",
    },
    "keywords": "Muhammad Abu Bakar, Software Engineer, Next.js, Node.js, React, Full-Stack Developer, MERN Stack, Portfolio",
    "about": {
      "@type": "Person",
      "name": "Muhammad Abu Bakar",
    },
    "mentions": [
      { "@type": "Thing", "name": "Next.js" },
      { "@type": "Thing", "name": "Node.js" },
      { "@type": "Thing", "name": "React.js" },
      { "@type": "Thing", "name": "TypeScript" },
      { "@type": "Thing", "name": "MongoDB" },
      { "@type": "Thing", "name": "Laravel" },
    ],
    "significantLink": "https://abubakarsarwar.vercel.app/about",
    "relatedLink": [
      "https://www.linkedin.com/in/muhammad-abubakar-b238a5298",
      "https://github.com/abubakar-sarwar",
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${poppins.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageLd).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What technologies does Muhammad Abu Bakar specialize in?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Muhammad Abu Bakar specializes in Next.js, React.js, Node.js, Nest.js, TypeScript, MongoDB, and Laravel."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Muhammad Abu Bakar available for freelance or new opportunities?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Muhammad Abu Bakar is open to discussing new opportunities. You can reach out via LinkedIn or GitHub."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many years of experience does Muhammad Abu Bakar have?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Muhammad Abu Bakar has 3+ years of professional experience in full-stack web development."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where does Muhammad Abu Bakar currently work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Muhammad Abu Bakar currently works as a Full Stack Developer at Epazz, Inc in Lahore, Pakistan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What kind of projects has Muhammad Abu Bakar worked on?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Muhammad Abu Bakar has worked on all kinds of web projects, ranging from full-stack applications and SaaS platforms to open-source packages and client-facing products across various industries."
                  }
                }
              ]
            }).replace(/</g, '\\u003c'),
          }}
        />
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Analytics />
        <SpeedInsights />
        <CursorCircle />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
