import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/data";
import { ExternalLink, GithubIcon, CreditCard, BookOpen, Stethoscope, LucideIcon } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const iconMap: Record<string, LucideIcon> = {
  "credit-card": CreditCard,
  "book-open": BookOpen,
  "stethoscope": Stethoscope,
};

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.icon] || CreditCard;

  return (
    <Card className="flex flex-col h-full hover:border-primary/50 transition-colors overflow-hidden">
      <div className="flex items-center justify-center p-8 bg-muted/50">
        <Icon className="h-16 w-16 text-primary" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.testCredentials && (
          <div className="text-xs text-muted-foreground border-t border-border pt-3 space-y-1">
            <p className="font-medium text-foreground">Test credentials for recruiters:</p>
            <p>Login: {project.testCredentials.login}</p>
            <p>Password: {project.testCredentials.password}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {project.github?.map((repo) => (
          <Button
            key={repo.url}
            variant="outline"
            size="sm"
            asChild
            className="flex-1 min-w-[120px]"
          >
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <GithubIcon className="h-4 w-4" />
              {repo.label}
            </a>
          </Button>
        ))}
        {project.demo?.map((demo) => (
          <Button
            key={demo.url}
            variant="default"
            size="sm"
            asChild
            className="flex-1 min-w-[120px]"
          >
            <a
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              {demo.label}
            </a>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
