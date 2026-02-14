import Image from 'next/image';
import Link from 'next/link';
import type { Project } from './types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ShoppingCart, Lock, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isAvailable = project.status === 'Available';
  const isSystem = project.projectType === 'Systems';

  const formattedPrice = project.price
    ? new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(project.price)
    : null;
    
  const discountedPrice = project.price ? project.price * 0.8 : 0;
  const formattedDiscountedPrice = new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(discountedPrice);

  const whatsappMessage = `Hello, I'd like to purchase the '${project.title}' software. The listed price is ${formattedPrice}, and with the 20% discount, the price is ${formattedDiscountedPrice}.`;
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="flex flex-col overflow-hidden h-full border-2 border-gray-100 shadow-xl rounded-[2rem] group bg-white">
        {/* Project Visual Header */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110"
            data-ai-hint={project.dataAiHint || "project image"}
          />
          
          {/* Elegant Status Indicators */}
          {!isAvailable && (
            <div className="absolute top-4 right-4 z-20">
              <Badge variant="destructive" className="px-4 py-1.5 rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg border-2 border-white">
                SOLD
              </Badge>
            </div>
          )}
          
          {isAvailable && (
            <div className="absolute top-4 right-4 z-20">
              <Badge className="px-4 py-1.5 rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg border-2 border-white bg-green-500 hover:bg-green-600">
                AVAILABLE
              </Badge>
            </div>
          )}

          {/* Interactive Overlay */}
          <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <p className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
              {project.longDescription.substring(0, 100)}...
            </p>
            <div className="flex gap-3 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
              {isSystem ? (
                <Button variant="secondary" size="sm" disabled className="rounded-full font-bold">
                  <Lock className="mr-2 h-4 w-4" /> Systems Only
                </Button>
              ) : project.liveUrl && (
                <Button asChild variant="secondary" size="sm" className="rounded-full font-bold">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {isAvailable && (
                <Button asChild size="sm" className="rounded-full font-bold bg-primary hover:bg-primary/90">
                  <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Buy System
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        <CardHeader className="px-6 pt-6 pb-2">
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">
                {project.projectType} Development
              </p>
              <CardTitle className="text-2xl font-black text-gray-900 group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-sm font-medium leading-relaxed line-clamp-2 pt-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="px-6 pb-6 pt-2 flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-[10px] font-bold px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="px-6 py-6 border-t-2 border-gray-50 mt-auto flex items-center justify-between">
          {isAvailable && formattedPrice ? (
            <div className="flex items-center gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">License Price</p>
                <p className="text-2xl font-black text-accent">{formattedPrice}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
              <span className="text-[10px] font-black uppercase tracking-widest">Custom Deliverable</span>
            </div>
          )}

          {isAvailable ? (
            <Button asChild size="icon" className="h-12 w-12 rounded-2xl bg-primary hover:bg-primary/90 neo-shadow-hover transition-all">
              <Link href={whatsappLink} target="_blank">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
          ) : (
            <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100">
              <Lock className="h-5 w-5 text-gray-300" />
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
