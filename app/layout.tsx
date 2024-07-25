import CursorCircle from "@/app/_components/cursorCircle";
import Footer from "@/app/_components/footer";
import Nav from "@/app/_components/nav";
import "@/css/styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Abubakar - Mern Stack Developer | Laravel Developer",
  description:
    "I build web-based solutions that prioritize functionality and user experience. I enjoy turning ideas into reality by creating practical and visually appealing web applications.",
  authors: [{ name: "Abubakar" }],
  creator: "Abubakar",
  publisher: "Abubakar",
  applicationName: "Portfolio | Abubakar",
  keywords: [
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Tailwindcss",
    "Laravel",
  ],
  icons: ["/assets/logo.png"],
  metadataBase: new URL("https://abubakarsarwar.vercel.app/"),
  openGraph: {
    title: "Abubakar",
    description: "Creative developer specializing in web development",
    type: "website",
    url: "https://abubakarsarwar.vercel.app/",
    siteName: "https://abubakarsarwar.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CursorCircle />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
