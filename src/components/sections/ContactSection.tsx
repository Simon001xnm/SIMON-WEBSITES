
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import { WHATSAPP_ORDER_NUMBER } from '@/lib/constants';

// Inline SVG for WhatsApp icon
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mr-2"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
  </svg>
);

export function ContactSection() {
  const contactEmail = "simonwanjiru224@gmail.com";
  const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=Hello! I'd like to discuss a project with you.`;
  const linkedInUrl = "https://www.linkedin.com/in/simon-styles-technologies-limited-tech-company-644a00257/";
  const githubUrl = "https://github.com/Symoh242";


  return (
    <Card className="w-full shadow-lg border-2 border-primary/5">
      <CardHeader className="text-center px-4 py-6 sm:p-6">
        <CardTitle className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">Get In Touch</CardTitle>
        <CardDescription className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mt-1">
          Have a project in mind or just want to connect? We prefer direct communication via WhatsApp for faster responses.
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-4 sm:mt-6 px-4 pb-6 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="space-y-4 sm:space-y-6">
            <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white h-16 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-green-200">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </Button>
            
            <div className="flex items-start gap-3 sm:gap-4 p-4 rounded-2xl bg-secondary/50 border border-primary/5">
              <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Email Channel</h3>
                <a href={`mailto:${contactEmail}`} className="text-sm font-bold text-primary hover:underline break-all">
                  {contactEmail}
                </a>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left space-y-4">
            <p className="text-sm sm:text-base text-muted-foreground font-medium">
              We are currently available for high-performance projects and system collaborations across Africa.
            </p>
            <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 mt-4 sm:mt-6">
              <Button variant="outline" size="icon" asChild className="h-12 w-12 rounded-xl border-2">
                <Link href={linkedInUrl} target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="h-12 w-12 rounded-xl border-2">
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
