import CursorCircle from "@/app/_components/cursorCircle";
import Footer from "@/app/_components/footer";
import Nav from "@/app/_components/nav";
import "@/css/styles.css";
import type { Metadata } from "next";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Abubakar - Mern Stack Developer | Laravel Developer",
  description:
    "I build web-based solutions that prioritize functionality and user experience. I enjoy turning ideas into reality by creating practical and visually appealing web applications.",
  authors: [{ name: "M. Abubakar" }],
  creator: "M. Abu Bakar",
  publisher: "M. Abubakar",
  applicationName: "Portfolio | M. Abubakar",
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
    title: "M. Abubakar",
    description: "Creative developer specializing in web development",
    images: ["/assets/abubakarsarwar.png"],
    type: "website",
    url: "https://abubakarsarwar.vercel.app/",
    siteName: "https://abubakarsarwar.vercel.app/",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <CursorCircle />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
