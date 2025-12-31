
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from './types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ShoppingCart } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isAvailable = project.status === 'Available';

  const formattedPrice = project.price
    ? new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(project.price)
    : null;

  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-xl group">
      <CardHeader className="p-4">
        <div className="aspect-video relative mb-4 overflow-hidden rounded-md border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.dataAiHint || "project image"}
          />
          {!isAvailable && (
             <Badge variant="destructive" className="absolute top-2 right-2 z-10">SOLD</Badge>
          )}
        </div>
        <CardTitle className="text-lg sm:text-xl font-semibold">{project.title}</CardTitle>
        <CardDescription className="text-sm min-h-[3em]">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 pt-0 border-t mt-4 pt-4">
        <div className="w-full flex justify-between items-center">
            {isAvailable && formattedPrice ? (
                 <div>
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="text-xl font-bold text-accent">{formattedPrice}</p>
                 </div>
            ) : (
                <div className="flex gap-2 flex-wrap">
                    {project.liveUrl && (
                        <Button asChild variant="outline" size="sm">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> See Live
                            </Link>
                        </Button>
                    )}
                </div>
            )}

            {isAvailable ? (
                <Button asChild size="sm">
                    <Link href="/contact">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
                    </Link>
                </Button>
            ) : (
                 <Badge variant="outline" className="mt-2 sm:mt-0">{project.projectType}</Badge>
            )}
        </div>
      </CardFooter>
    </Card>
  );
}
