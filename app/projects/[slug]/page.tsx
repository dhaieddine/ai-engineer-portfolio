import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ProjectDetailPage } from "@/components/project-detail/project-detail-page"
import { getProject, projectSlugs } from "@/lib/projects-data"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} | Dhia Eddine Sadli`,
    description: project.subtitle,
    keywords: project.tags,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailPage project={project} />
}
