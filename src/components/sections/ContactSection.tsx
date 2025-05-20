import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  const contactEmail = "simonwanjiru224@gmail.com";
  const contactPhone = "07586 73616";
  const linkedInUrl = "https://www.linkedin.com/in/simon-styles-technologies-644a00257/";
  const githubUrl = "https://github.com/Symoh242";


  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="text-center px-4 py-6 sm:p-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold">Get In Touch</CardTitle>
        <CardDescription className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mt-1">
          Have a project in mind or just want to connect? I'd love to hear from you.
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-4 sm:mt-6 px-4 pb-6 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-secondary/50">
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="text-md sm:text-lg font-semibold">Email</h3>
                <a href={`mailto:${contactEmail}`} className="text-sm sm:text-base text-accent hover:underline break-all">
                  {contactEmail}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-secondary/50">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="text-md sm:text-lg font-semibold">Phone</h3>
                <a href={`tel:${contactPhone.replace(/\s/g, '')}`} className="text-sm sm:text-base text-accent hover:underline">
                  {contactPhone}
                </a>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left space-y-4">
            <p className="text-sm sm:text-base text-muted-foreground">
              I'm currently available for freelance projects and collaborations. Let's build something great together!
            </p>
            <Button asChild size="lg" className="w-full md:w-auto group text-sm sm:text-base">
              <a href={`mailto:${contactEmail}`}>
                Send an Email
                <Mail className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 mt-4 sm:mt-6">
              <Button variant="outline" size="icon" asChild>
                <Link href={linkedInUrl} target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={githubUrl} target="_blank" aria-label="GitHub">
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
