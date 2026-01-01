
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/blog-data';

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen">
      <EcommerceHeader />
      <main className="py-12 md:py-20">
        <Container>
          <div className="text-center mb-12 md:mb-16">
             <Button asChild variant="outline" size="sm" className="mb-6">
                <Link href="/">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Simon Styles Tech Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, guides, and news from the world of technology in Kenya and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <Card key={post.slug} className="flex flex-col overflow-hidden group">
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                    <div className="relative aspect-video">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </Link>
                 <CardHeader>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-sm pt-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                    <Button asChild variant="link" className="p-0">
                        <Link href={`/blog/${post.slug}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}
