
'use client';

import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CommentSection } from './CommentSection';
import { motion, AnimatePresence } from 'framer-motion';
import { useFirestore, setDocumentNonBlocking } from '@/firebase';
import { doc, increment } from 'firebase/firestore';
import { getAnonymousId } from '@/lib/anonymous-id';
import { useToast } from '@/hooks/use-toast';

interface BlogInteractionsProps {
  blogPostId: string;
  initialLikes: number;
  initialComments: number;
}

export function BlogInteractions({ blogPostId, initialLikes, initialComments }: BlogInteractionsProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const firestore = useFirestore();
  const { toast } = useToast();

  const handleLike = () => {
    if (isLiked) return;
    
    setIsLiked(true);
    const anonId = getAnonymousId();
    const blogRef = doc(firestore, 'blogPosts', blogPostId);
    const likeRef = doc(firestore, 'blogPosts', blogPostId, 'likes', anonId);

    // Atomic update for counts
    setDocumentNonBlocking(blogRef, { 
      likeCount: increment(1) 
    }, { merge: true });

    // Track the individual like
    setDocumentNonBlocking(likeRef, {
      id: anonId,
      targetId: blogPostId,
      targetType: 'BlogPost',
      anonymousLikerIdentifier: anonId,
      likeDate: new Date().toISOString()
    }, { merge: true });

    toast({
      title: "Thanks for the love!",
      description: "Your appreciation means a lot to our team.",
    });
  };

  return (
    <div className="space-y-12">
      {/* Floating/Bottom Action Bar */}
      <div className="flex items-center justify-center gap-4 py-8 border-y-2 border-gray-50">
        <Button 
          onClick={handleLike}
          variant={isLiked ? 'default' : 'outline'}
          className={`h-16 px-10 rounded-full font-black uppercase tracking-widest text-[10px] gap-3 transition-all ${isLiked ? 'bg-red-500 hover:bg-red-600' : 'hover:border-red-200 hover:text-red-500'}`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          {initialLikes + (isLiked ? 1 : 0)} Likes
        </Button>

        <Button 
          onClick={() => setShowComments(!showComments)}
          variant="outline"
          className={`h-16 px-10 rounded-full font-black uppercase tracking-widest text-[10px] gap-3 transition-all ${showComments ? 'bg-primary text-white border-primary' : 'hover:border-primary/30 hover:text-primary'}`}
        >
          <MessageCircle className="w-5 h-5" />
          {initialComments} Insights
        </Button>

        <Button 
          variant="outline"
          className="h-16 w-16 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast({ title: "Link Copied", description: "You can now share this insight with others." });
          }}
        >
          <Share2 className="w-5 h-5 text-gray-400" />
        </Button>
      </div>

      {/* Comment Drawer/Section */}
      <AnimatePresence>
        {(showComments || true) && ( // Keeping it visible for SEO/UX, or toggle it if desired
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <CommentSection blogPostId={blogPostId} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
