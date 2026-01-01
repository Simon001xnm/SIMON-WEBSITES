
import { notFound } from 'next/navigation';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS, type BlogPost } from '@/lib/blog-data';
import { Badge } from '@/components/ui/badge';


interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <EcommerceHeader />
      <main className="py-12 md:py-20">
        <Container>
            <div className="max-w-4xl mx-auto">
                 <div className="mb-8">
                    <Button asChild variant="outline" size="sm">
                        <Link href="/blog">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Link>
                    </Button>
                </div>

                <article>
                    <header className="mb-8">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6 shadow-lg">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 896px, 1024px"
                                className="object-cover"
                                priority
                            />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
                            {post.title}
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            {post.excerpt}
                        </p>
                    </header>
                    
                    <div 
                        className="prose prose-lg dark:prose-invert max-w-none prose-a:text-primary hover:prose-a:text-primary/80 prose-headings:text-foreground prose-strong:text-foreground"
                        dangerouslySetInnerHTML={{ __html: post.contentHTML }} 
                    />

                    <div className="mt-12">
                        <h3 className="text-lg font-semibold mb-3">Keywords</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.keywords.map(keyword => (
                                <Badge key={keyword} variant="secondary">{keyword}</Badge>
                            ))}
                        </div>
                    </div>
                </article>
            </div>
        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}

// Generate static paths for each blog post
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}
