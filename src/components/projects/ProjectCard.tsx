
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from './types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ShoppingCart } from 'lucide-react';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isAvailable = project.status === 'Available';

  const formattedPrice = project.price
    ? new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(project.price)
    : null;
    
  const discountedPrice = project.price ? project.price * 0.8 : 0;
  const formattedDiscountedPrice = new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(discountedPrice);

  const whatsappMessage = `Hello, I'd like to purchase the '${project.title}' software. The listed price is ${formattedPrice}, and with the 20% discount, the price is ${formattedDiscountedPrice}.`;
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 ease-in-out group shadow-md hover:shadow-xl">
      <div className="relative">
        <div className="aspect-video relative overflow-hidden rounded-t-md">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
            data-ai-hint={project.dataAiHint || "project image"}
          />
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.liveUrl && (
                <Button asChild variant="secondary" size="sm">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> See Live
                    </Link>
                </Button>
            )}
             {isAvailable && (
                <Button asChild size="sm">
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
                    </Link>
                </Button>
            )}
          </div>
          {!isAvailable && (
             <Badge variant="destructive" className="absolute top-2 right-2 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">SOLD</Badge>
          )}
        </div>
      </div>

      <CardHeader className="p-4">
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

      <CardFooter className="p-4 pt-0 border-t mt-auto pt-4">
        <div className="w-full flex justify-between items-center">
            {isAvailable && formattedPrice ? (
                 <div>
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="text-xl font-bold text-accent">{formattedPrice}</p>
                 </div>
            ) : (
                <Badge variant="outline">{project.projectType} Project</Badge>
            )}

            {!isAvailable ? (
                <div className="flex gap-2">
                    {/* Placeholder for other actions if needed */}
                </div>
            ) : (
                 <p className="text-sm font-semibold text-green-600">Available for Purchase</p>
            )}
        </div>
      </CardFooter>
    </Card>
  );
}
