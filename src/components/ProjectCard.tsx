import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { TagPill } from "@/components/TagPill";
import type { PortfolioItem } from "@/data/portfolio";

export function ProjectCard({ project }: { project: PortfolioItem }) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <div
        className="flex aspect-video items-center justify-center bg-navy/5 text-sm font-medium text-navy/40"
        role="img"
        aria-label={`${project.name} project preview placeholder`}
      >
        {/* TODO: replace with real project screenshot */}
        Image coming soon
      </div>
      <CardContent className="pt-6">
        <h3 className="text-lg font-bold text-navy">{project.name}</h3>
        <p className="mt-2 text-sm text-navy/70">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </div>
        <Link
          to={`/work/${project.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange hover:underline"
        >
          View Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </CardContent>
    </Card>
  );
}
