
'use client';

import React, { useState } from 'react';
import { useCollection, useMemoFirebase, useFirestore } from '@/firebase';
import { collection, query, where, orderBy, doc, increment } from 'firebase/firestore';
import { CommentForm } from './CommentForm';
import { CommentItem } from './CommentItem';
import { Loader2, MessageSquare } from 'lucide-react';

interface CommentSectionProps {
  blogPostId: string;
}

export function CommentSection({ blogPostId }: CommentSectionProps) {
  const firestore = useFirestore();
  
  // Fetch top-level comments
  const commentsQuery = useMemoFirebase(() => {
    if (!firestore || !blogPostId) return null;
    return query(
      collection(firestore, 'blogPosts', blogPostId, 'comments'),
      where('parentId', '==', null),
      orderBy('commentDate', 'desc')
    );
  }, [firestore, blogPostId]);

  const { data: comments, isLoading } = useCollection(commentsQuery);

  return (
    <div className="max-w-2xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-black tracking-tighter text-gray-900 mb-4">Community Conversation</h2>
        <p className="text-muted-foreground font-medium">Join the discussion. Share your thoughts or ask a question.</p>
      </div>

      <CommentForm blogPostId={blogPostId} />

      <div className="space-y-8 mt-16">
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : comments && comments.length > 0 ? (
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} blogPostId={blogPostId} />
          ))
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-100">
            <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">No thoughts shared yet. Be the first!</p>
          </div>
        )}
      </div>
    </div>
  );
}
