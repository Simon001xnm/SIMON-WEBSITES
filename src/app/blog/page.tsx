
'use client';

import { EcommerceHeader } from '@/components/layout/EcommerceHeader';
import { EcommerceFooter } from '@/components/layout/EcommerceFooter';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, MessageCircle, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/blog-data';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const featuredPost = BLOG_POSTS[0];
  const remainingPosts = BLOG_POSTS.slice(1);

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <EcommerceHeader />
      <main className="py-12 md:py-24">
        <Container>
          {/* Header */}
          <div className="max-w-3xl mb-16 md:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6"
            >
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">The Knowledge Base</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 leading-[0.9] mb-8"
            >
              Insights from the <br/>
              <span className="text-primary italic">Digital Frontier.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground font-medium leading-relaxed"
            >
              We share our expertise on web engineering, software systems, and digital strategy to help you navigate the future of technology in Africa.
            </motion.p>
          </div>

          {/* Featured Post */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="group block relative aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-gray-200">
              <Image
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                <div className="flex gap-4 mb-4">
                   <span className="text-[10px] font-black uppercase tracking-widest text-white/60 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">Featured Story</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-white/80 text-lg font-medium line-clamp-2 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px]">
                  Read Full Insight <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {remainingPosts.map((post, i) => (
              <motion.article 
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block mb-8 relative aspect-video overflow-hidden rounded-[2rem] shadow-xl bg-gray-100">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <span>Engineering</span>
                    <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                    <span>5 Min Read</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-primary transition-colors leading-tight">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground font-medium line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto font-black uppercase tracking-widest text-[10px] group-hover:translate-x-2 transition-transform">
                    <Link href={`/blog/${post.slug}`}>
                      Dive Deeper <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </main>
      <EcommerceFooter />
    </div>
  );
}
