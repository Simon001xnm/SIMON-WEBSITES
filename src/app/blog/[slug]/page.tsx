
'use client';

import { notFound, useParams } from 'next/navigation';
import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Share2, Clock, User, Bookmark } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/blog-data';
import { Badge } from '@/components/ui/badge';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BlogInteractions } from '@/components/blog/BlogInteractions';
import { useDoc, useMemoFirebase, useFirestore } from '@/firebase';
import { doc } from 'firebase/firestore';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const firestore = useFirestore();
  const blogStatsRef = useMemoFirebase(() => {
    if (!firestore || !slug) return null;
    return doc(firestore, 'blogPosts', slug);
  }, [firestore, slug]);

  const { data: stats } = useDoc(blogStatsRef);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <EcommerceHeader />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-[112px] left-0 right-0 h-1.5 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <main className="py-12 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-12"
            >
              <Button asChild variant="ghost" size="sm" className="rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-primary/5 text-gray-400 hover:text-primary transition-all">
                <Link href="/blog">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Insights
                </Link>
              </Button>
            </motion.div>

            <article>
              <header className="mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap items-center gap-6 mb-8 text-[10px] font-black uppercase tracking-widest text-gray-400"
                >
                  <div className="flex items-center gap-2"><User className="w-3 h-3 text-primary" /> Simon Styles</div>
                  <div className="flex items-center gap-2"><Clock className="w-3 h-3 text-primary" /> 5 Min Read</div>
                  <div className="flex items-center gap-2">Published Mar 2026</div>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 leading-[0.95] mb-10"
                >
                  {post.title}
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-12 border-l-4 border-primary/20 pl-8"
                >
                  {post.excerpt}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl mb-16"
                >
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </header>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="prose prose-xl max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:font-medium prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary prose-a:font-black prose-strong:text-gray-900 prose-blockquote:border-primary prose-blockquote:bg-gray-50 prose-blockquote:p-8 prose-blockquote:rounded-3xl"
                dangerouslySetInnerHTML={{ __html: post.contentHTML }} 
              />

              <div className="mt-20 pt-12 border-t-2 border-gray-50">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Explore Topics</h3>
                <div className="flex flex-wrap gap-3">
                  {post.keywords.slice(0, 10).map(keyword => (
                    <Badge key={keyword} variant="secondary" className="px-4 py-2 rounded-full font-bold bg-gray-50 text-gray-600 hover:bg-primary hover:text-white transition-colors cursor-default border-none">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>

            {/* Interaction Section */}
            <section className="mt-24">
              <BlogInteractions 
                blogPostId={slug} 
                initialLikes={stats?.likeCount || 0}
                initialComments={stats?.commentCount || 0}
              />
            </section>
          </div>
        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}
