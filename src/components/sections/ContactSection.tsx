import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  const contactEmail = "simon.styles@example.com";
  const contactPhone = "07586 73616"; // Updated phone number
  const linkedInUrl = "https://linkedin.com/in/simonstyles"; // Replace with actual URL
  const githubUrl = "https://github.com/simonstyles"; // Replace with actual URL


  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Get In Touch</CardTitle>
        <CardDescription className="text-lg text-muted-foreground max-w-xl mx-auto">
          Have a project in mind or just want to connect? I'd love to hear from you.
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
              <Mail className="h-8 w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a href={`mailto:${contactEmail}`} className="text-accent hover:underline break-all">
                  {contactEmail}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
              <Phone className="h-8 w-8 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <a href={`tel:${contactPhone.replace(/\s/g, '')}`} className="text-accent hover:underline">
                  {contactPhone}
                </a>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left space-y-4">
            <p className="text-muted-foreground">
              I'm currently available for freelance projects and collaborations. Let's build something great together!
            </p>
            <Button asChild size="lg" className="w-full md:w-auto group">
              <a href={`mailto:${contactEmail}`}>
                Send an Email
                <Mail className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <Button variant="outline" size="icon" asChild>
                <Link href={linkedInUrl} target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={githubUrl} target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
