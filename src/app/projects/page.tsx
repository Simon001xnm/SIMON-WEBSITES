import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { MOCK_PROJECTS } from '@/lib/project-data';
import { ProjectShowcaseAITool } from '@/components/ai/ProjectShowcaseAITool';
import { Separator } from '@/components/ui/separator';

export default function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen">
      <EcommerceHeader />
      <main className="py-12 md:py-20">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A selection of projects that showcase our skills and dedication to quality.
            </p>
          </div>
          
          <ProjectGrid projects={MOCK_PROJECTS} />

          <Separator className="my-16 md:my-24" />

          <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
                    Create Your Own Project Showcase
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Use our AI tool to generate a professional showcase description for your own projects.
                </p>
            </div>
            <ProjectShowcaseAITool />
          </div>

        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}
