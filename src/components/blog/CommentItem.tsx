
'use client';

import React, { useState } from 'react';
import { Heart, Reply, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { CommentForm } from './CommentForm';
import { formatDistanceToNow } from 'date-fns';
import { useCollection, useMemoFirebase, useFirestore, setDocumentNonBlocking } from '@/firebase';
import { collection, query, where, orderBy, doc, increment } from 'firebase/firestore';
import { getAnonymousId } from '@/lib/anonymous-id';
import { motion, AnimatePresence } from 'framer-motion';

interface CommentItemProps {
  comment: any;
  blogPostId: string;
}

export function CommentItem({ comment, blogPostId }: CommentItemProps) {
  const [isReplying, setIsLikedReplying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const firestore = useFirestore();

  // Fetch replies
  const repliesQuery = useMemoFirebase(() => {
    if (!firestore || !blogPostId || !comment.id) return null;
    return query(
      collection(firestore, 'blogPosts', blogPostId, 'comments'),
      where('parentId', '==', comment.id),
      orderBy('commentDate', 'asc')
    );
  }, [firestore, blogPostId, comment.id]);

  const { data: replies } = useCollection(repliesQuery);

  const handleLike = () => {
    if (isLiked) return;
    setIsLiked(true);
    
    const anonId = getAnonymousId();
    const commentRef = doc(firestore, 'blogPosts', blogPostId, 'comments', comment.id);
    const likeRef = doc(firestore, 'blogPosts', blogPostId, 'comments', comment.id, 'likes', anonId);

    setDocumentNonBlocking(commentRef, { 
      likeCount: increment(1) 
    }, { merge: true });

    setDocumentNonBlocking(likeRef, {
      id: anonId,
      targetId: comment.id,
      targetType: 'Comment',
      anonymousLikerIdentifier: anonId,
      likeDate: new Date().toISOString()
    }, { merge: true });
  };

  const initials = comment.authorName?.split(' ').map((n: string) => n[0]).join('').toUpperCase() || '?';

  return (
    <div className="group">
      <div className="flex gap-4">
        <Avatar className="h-12 w-12 border-2 border-white shadow-lg shrink-0">
          <AvatarFallback className="bg-primary/10 text-primary font-black text-xs">{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-grow space-y-3">
          <div className="flex items-baseline justify-between">
            <h4 className="text-sm font-black text-gray-900">{comment.authorName}</h4>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {formatDistanceToNow(new Date(comment.commentDate))} ago
            </span>
          </div>
          <p className="text-sm font-medium text-gray-600 leading-relaxed bg-gray-50 p-5 rounded-2xl rounded-tl-none border border-gray-100">
            {comment.content}
          </p>
          <div className="flex items-center gap-6">
            <button 
              onClick={handleLike}
              className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
            >
              <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
              {comment.likeCount || 0}
            </button>
            <button 
              onClick={() => setIsLikedReplying(!isReplying)}
              className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-colors"
            >
              <Reply className="w-3.5 h-3.5" />
              Reply
            </button>
          </div>

          <AnimatePresence>
            {isReplying && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-4 overflow-hidden"
              >
                <CommentForm 
                  blogPostId={blogPostId} 
                  parentId={comment.id} 
                  onSuccess={() => setIsLikedReplying(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Replies List */}
          {replies && replies.length > 0 && (
            <div className="mt-6 space-y-6 border-l-2 border-gray-100 pl-6 ml-2">
              {replies.map((reply) => (
                <div key={reply.id} className="flex gap-3">
                  <Avatar className="h-8 w-8 border border-white shadow-md shrink-0">
                    <AvatarFallback className="bg-gray-100 text-gray-400 font-black text-[8px]">
                      {reply.authorName?.split(' ').map((n: string) => n[0]).join('').toUpperCase() || '?'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-grow space-y-2">
                    <div className="flex items-baseline justify-between">
                      <h5 className="text-[10px] font-black text-gray-900">{reply.authorName}</h5>
                      <span className="text-[8px] font-bold text-gray-300 uppercase tracking-widest">
                        {formatDistanceToNow(new Date(reply.commentDate))} ago
                      </span>
                    </div>
                    <p className="text-xs font-medium text-gray-500 leading-relaxed bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                      {reply.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
