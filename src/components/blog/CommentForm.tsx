
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useFirestore, addDocumentNonBlocking, setDocumentNonBlocking } from '@/firebase';
import { collection, doc, increment, serverTimestamp } from 'firebase/firestore';
import { Loader2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const commentSchema = z.object({
  authorName: z.string().min(2, "Name is required"),
  content: z.string().min(5, "Share a bit more insight..."),
});

interface CommentFormProps {
  blogPostId: string;
  parentId?: string;
  onSuccess?: () => void;
}

export function CommentForm({ blogPostId, parentId = '', onSuccess }: CommentFormProps) {
  const [isPending, setIsPending] = useState(false);
  const firestore = useFirestore();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: { authorName: '', content: '' },
  });

  const onSubmit = async (values: z.infer<typeof commentSchema>) => {
    setIsPending(true);
    try {
      const commentsRef = collection(firestore, 'blogPosts', blogPostId, 'comments');
      const blogRef = doc(firestore, 'blogPosts', blogPostId);
      
      const newComment = {
        blogPostId,
        parentId: parentId || null,
        authorName: values.authorName,
        content: values.content,
        commentDate: new Date().toISOString(),
        isApproved: true, // Auto-approve for demo
        likeCount: 0,
      };

      await addDocumentNonBlocking(commentsRef, newComment);

      // Increment total comment count on post
      setDocumentNonBlocking(blogRef, { 
        commentCount: increment(1) 
      }, { merge: true });

      toast({
        title: "Insight Published",
        description: "Your comment is now live. Thanks for contributing!",
      });
      
      form.reset();
      if (onSuccess) onSuccess();
    } catch (e) {
      console.error(e);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className={`p-8 rounded-[2rem] bg-white shadow-2xl border-2 border-gray-50 ${parentId ? 'p-6' : 'p-8'}`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="authorName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="Your Name" 
                      {...field} 
                      className="h-12 rounded-xl bg-gray-50 border-none font-bold placeholder:text-gray-300 focus-visible:ring-primary/20"
                    />
                  </FormControl>
                  <FormMessage className="text-[10px] font-black uppercase" />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea 
                    placeholder="What are your thoughts on this?" 
                    className="min-h-[120px] rounded-2xl bg-gray-50 border-none font-medium placeholder:text-gray-300 resize-none focus-visible:ring-primary/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[10px] font-black uppercase" />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full h-14 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20"
          >
            {isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>Publish Insight <Send className="ml-2 w-3 h-3" /></>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
