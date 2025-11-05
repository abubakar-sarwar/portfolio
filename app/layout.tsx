import Nav from "@/app/_components/nav";
import Footer from "@/app/_components/footer";
import type { Metadata, Viewport } from "next";
import { Person, WithContext } from "schema-dts";
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
  "I'm M. Abu Bakar, a Software Engineer who builds fast, scalable, and user-friendly web applications. I specialize in turning ideas into powerful, modern digital experiences using technologies like Next.js, Laravel, and MongoDB.";
export const metadata: Metadata = {
  manifest: "https://abubakarsarwar.vercel.app/manifest.json",
  title: "Portfolio | M. Abu Bakar - Software Engineer",
  description,
  authors: [{ name: "M. Abu Bakar" }],
  creator: "M. Abu Bakar",
  publisher: "M. Abu Bakar",
  applicationName: "Portfolio | M. Abu Bakar",
  keywords: [
    "M. Abu Bakar",
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
    title: "M. Abubakar",
    description,
    images: ["/assets/abubakarsarwar.png"],
    type: "website",
    url: new URL("https://abubakarsarwar.vercel.app/"),
    siteName: "abubakarsarwar.vercel.app",
    locale: "en_US",
  },
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
      "I'm M. Abu Bakar, a Software Engineer who builds fast, scalable, and user-friendly web applications. I specialize in turning ideas into powerful, modern digital experiences.",
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

  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Analytics />
        <SpeedInsights />
        <CursorCircle />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
