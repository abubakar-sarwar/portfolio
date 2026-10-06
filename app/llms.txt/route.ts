import { NextResponse } from "next/server";
import { projects } from "@/constants";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const projectLines = projects
    .filter((p) => p.liveLink || p.gitLink)
    .map((p) => {
      const url = p.liveLink || p.gitLink;
      const techs = p.technologies.join(", ");
      return `- [${p.title}](${url}) - ${p.description} Stack: ${techs}.`;
    })
    .join("\n");

  const content = `# Muhammad Abu Bakar — Software Engineer Portfolio

> Software Engineer with 3+ years of experience building scalable web applications using Next.js, Node.js, Nest.js, React.js, TypeScript, MongoDB, and Laravel.

## Core Pages
- [Home](https://abubakarsarwar.vercel.app/) - Portfolio overview, featured projects, and expertise.
- [About](https://abubakarsarwar.vercel.app/about) - Background, skills, and work experience.

## Professional Profiles
- [LinkedIn](https://www.linkedin.com/in/muhammad-abubakar-b238a5298) - Professional profile and work history.
- [GitHub](https://github.com/abubakar-sarwar) - Open-source projects and code contributions.
- [npm](https://www.npmjs.com/package/next-simple-select) - Published next-simple-select package.

## Projects
${projectLines}

## Optional
- [Instagram](https://www.instagram.com/web_dev_pk) - Web development content and updates.
`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
