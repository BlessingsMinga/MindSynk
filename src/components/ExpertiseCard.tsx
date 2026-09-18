import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TagPill } from "@/components/TagPill";

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export function ExpertiseCard({ icon: Icon, title, description, tags }: ExpertiseCardProps) {
  return (
    <Card className="h-full transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10">
          <Icon className="h-6 w-6 text-orange" aria-hidden="true" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
