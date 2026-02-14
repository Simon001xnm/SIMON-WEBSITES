import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { MOCK_PROJECTS } from '@/lib/project-data';
import { ProjectShowcaseAITool } from '@/components/ai/ProjectShowcaseAITool';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen">
      <EcommerceHeader />
      <main className="pb-20">
        {/* Stunning Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center overflow-hidden mb-16">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              alt="Projects Banner"
              fill
              className="object-cover brightness-[0.3]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
          </div>
          
          <Container className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Our Track Record</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white mb-6">
              Engineering <span className="text-primary italic">Digital Success.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Explore our portfolio of bespoke software, elegant websites, and high-performance systems delivered across Africa.
            </p>
          </Container>
        </section>

        <Container>
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Our Portfolio</h2>
              <p className="text-muted-foreground font-medium mt-2">Filter by availability or project type.</p>
            </div>
          </div>
          
          <ProjectGrid projects={MOCK_PROJECTS} />

          <Separator className="my-24 opacity-50" />

          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-12">
                <div className="inline-block p-3 bg-accent/10 rounded-2xl mb-4">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-accent">AI-Powered Tools</h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-4">
                    Generate Your Showcase
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Are you a developer? Use our proprietary AI tool to create stunning, professional descriptions for your own projects.
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
