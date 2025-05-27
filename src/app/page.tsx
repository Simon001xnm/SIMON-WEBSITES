
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { ContactSection } from '@/components/sections/ContactSection';
import { RecruitmentSection } from '@/components/sections/RecruitmentSection';
import { CategoriesSection } from '@/components/sections/CategoriesSection'; // Added import
import { ApplicationForm } from '@/components/sections/ApplicationForm';
import { MOCK_PROJECTS } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function HomePage() {
  return (
    <Dialog> {/* Main Dialog wrapper for ApplicationForm */}
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
            <Container className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
                Transforming Ideas into <span className="text-primary">Digital Realities</span>
              </h1>
              <p className="text-md sm:text-lg md:text-xl text-muted-foreground max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-10">
                Hi, I'm Simon Styles. I specialize in crafting innovative web, mobile, and system solutions that drive growth and user engagement.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                <Button asChild size="lg" className="group text-sm sm:text-base">
                  <Link href="#projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="group text-sm sm:text-base">
                    Join Our Team <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </DialogTrigger>
              </div>
            </Container>
          </section>

          <Separator />

          {/* Categories Section - New */}
          <CategoriesSection />

          <Separator />

          {/* Recruitment Section */}
          <RecruitmentSection />

          <Separator />

          {/* Interactive Project Grid Section */}
          <section id="projects" className="py-12 md:py-16 lg:py-20">
            <Container>
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">My Portfolio</h2>
                <p className="text-md sm:text-lg text-muted-foreground mt-2 max-w-md sm:max-w-xl mx-auto">
                  A selection of projects I've passionately built.
                </p>
              </div>
              <ProjectGrid projects={MOCK_PROJECTS} />
            </Container>
          </section>

          <Separator />

          {/* Contact CTA Section */}
          <section id="contact" className="py-12 md:py-16 lg:py-20 bg-secondary/30">
            <Container>
              <div className="max-w-3xl mx-auto">
               <ContactSection />
              </div>
            </Container>
          </section>

        </main>
        <Footer />
      </div>

      {/* Dialog Content for Application Form */}
      <DialogContent className="sm:max-w-xl p-0 overflow-y-auto max-h-[90vh]">
        <ApplicationForm />
      </DialogContent>
    </Dialog>
  );
}
