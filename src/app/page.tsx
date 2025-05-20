
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { ContactSection } from '@/components/sections/ContactSection';
import { RecruitmentSection } from '@/components/sections/RecruitmentSection';
import { ApplicationForm } from '@/components/sections/ApplicationForm'; // New import
import { MOCK_PROJECTS } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
          <Container className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Transforming Ideas into <span className="text-primary">Digital Realities</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Hi, I'm Simon Styles. I specialize in crafting innovative web, mobile, and system solutions that drive growth and user engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="group">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="#join-us">
                  Join Our Team <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        <Separator />

        {/* Recruitment Section */}
        <RecruitmentSection />

        <Separator />

        {/* Interactive Project Grid Section */}
        <section id="projects" className="py-16 md:py-20">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">My Portfolio</h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-xl mx-auto">
                A selection of projects I've passionately built.
              </p>
            </div>
            <ProjectGrid projects={MOCK_PROJECTS} />
          </Container>
        </section>

        <Separator />

        {/* Contact CTA Section */}
        <section id="contact" className="py-16 md:py-20 bg-secondary/30">
          <Container>
            <div className="max-w-3xl mx-auto">
             <ContactSection />
            </div>
          </Container>
        </section>

        <Separator />

        {/* Application Form Section */}
        <section id="apply" className="py-16 md:py-20 bg-background">
          <Container>
            <div className="max-w-3xl mx-auto">
              <ApplicationForm />
            </div>
          </Container>
        </section>

      </main>
      <Footer />
    </div>
  );
}
