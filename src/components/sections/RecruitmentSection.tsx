
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/layout/Container';
import { ArrowRight, Code, Users, Lightbulb, Sparkles } from 'lucide-react';
import { DialogTrigger } from '@/components/ui/dialog';

export function RecruitmentSection() {
  return (
    <section id="join-us" className="py-12 md:py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <Container>
        <div className="text-center mb-10 md:mb-16">
          <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-accent mx-auto mb-3 sm:mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-3 sm:mb-4">
            Shape the Future with Us
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground max-w-2xl md:max-w-3xl mx-auto">
            At Simon Styles Technology Limited, we're not just building software; we're crafting digital experiences that make a difference.
            We're on the lookout for talented, passionate, and driven developers to join our innovative team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card p-4 sm:p-6">
            <CardHeader className="p-2 sm:p-4">
              <div className="mx-auto bg-primary/10 p-3 sm:p-4 rounded-full w-fit mb-3 sm:mb-4 border border-primary/20">
                <Code className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-semibold">Expert Developers</CardTitle>
            </CardHeader>
            <CardContent className="p-2 sm:p-4">
              <p className="text-muted-foreground text-sm">
                Elevate your skills by working on diverse, challenging projects with modern tech stacks and best practices.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card p-4 sm:p-6">
            <CardHeader className="p-2 sm:p-4">
              <div className="mx-auto bg-primary/10 p-3 sm:p-4 rounded-full w-fit mb-3 sm:mb-4 border border-primary/20">
                <Lightbulb className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-semibold">Innovative Culture</CardTitle>
            </CardHeader>
            <CardContent className="p-2 sm:p-4">
              <p className="text-muted-foreground text-sm">
                Thrive in a forward-thinking environment that encourages creativity, experimentation, and continuous learning.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card p-4 sm:p-6">
            <CardHeader className="p-2 sm:p-4">
              <div className="mx-auto bg-primary/10 p-3 sm:p-4 rounded-full w-fit mb-3 sm:mb-4 border border-primary/20">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-semibold">Collaborative Spirit</CardTitle>
            </CardHeader>
            <CardContent className="p-2 sm:p-4">
              <p className="text-muted-foreground text-sm">
                Join a supportive and dynamic team where collaboration, knowledge sharing, and mutual respect are core values.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <DialogTrigger asChild>
            <Button size="lg" className="group text-md sm:text-lg py-3 px-6 sm:py-6 sm:px-10">
              Ready to Make an Impact? <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </DialogTrigger>
        </div>
      </Container>
    </section>
  );
}
