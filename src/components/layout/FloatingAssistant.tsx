
'use client';

import * as React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { askSymoh, type AskSymohOutput } from '@/ai/flows/symoh-assistant-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Sparkles, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  question: z.string().min(5, 'Please ask a more detailed question.'),
});

type SymohFormValues = z.infer<typeof formSchema>;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function FloatingAssistant() {
  const [conversation, setConversation] = React.useState<Message[]>([]);
  const [pending, setPending] = React.useState(false);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);

  const form = useForm<SymohFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { question: '' },
  });

  const onSubmit = async (values: SymohFormValues) => {
    setPending(true);
    setConversation(currentConversation => [
      ...currentConversation,
      { role: 'user', content: values.question },
      { role: 'assistant', content: '...' } 
    ]);
    
    form.reset();

    try {
      const stream = await askSymoh({ question: values.question });
      let assistantResponse = '';

      for await (const chunk of stream) {
        if (chunk?.answer) {
          assistantResponse += chunk.answer;
          setConversation(current => {
            const newConversation = [...current];
            const lastMessage = newConversation[newConversation.length - 1];
            if (lastMessage?.role === 'assistant') {
              lastMessage.content = assistantResponse;
            }
            return newConversation;
          });
        }
      }
    } catch(e) {
        console.error(e);
        const errorMessage = "Sorry, I encountered an error. Please try again.";
        setConversation(current => {
            const newConversation = [...current];
            const lastMessage = newConversation[newConversation.length - 1];
            if (lastMessage?.role === 'assistant') {
                lastMessage.content = errorMessage;
            } else {
                newConversation.push({ role: 'assistant', content: errorMessage });
            }
            return newConversation;
        });
    } finally {
        setPending(false);
    }
  };

  React.useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth',
        });
    }
  }, [conversation]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="fixed bottom-20 right-4 z-30 h-16 w-16 rounded-full shadow-lg flex items-center justify-center bg-primary hover:bg-primary/90 transition-transform hover:scale-110"
          aria-label="Open AI Assistant"
        >
          <Image 
            src="/ROBO.png" 
            alt="Symoh AI Assistant" 
            width={40} 
            height={40}
            className="rounded-full"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        className="w-[90vw] max-w-md p-0 border-0 shadow-2xl rounded-2xl mb-2"
      >
        <div className="flex flex-col h-[60vh]">
          <header className="p-4 border-b text-center rounded-t-2xl bg-muted">
            <h3 className="font-semibold flex items-center justify-center gap-2">Ask Symoh <Sparkles className="h-5 w-5 text-primary" /></h3>
            <p className="text-xs text-muted-foreground">Your AI assistant for development questions.</p>
          </header>
          <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {conversation.map((message, index) => (
                <div
                  key={index}
                  className={cn('flex items-end gap-2', {
                    'justify-end': message.role === 'user',
                  })}
                >
                  {message.role === 'assistant' && (
                    <Image
                      src="/ROBO.png"
                      alt="Symoh"
                      width={32}
                      height={32}
                      className="rounded-full h-8 w-8 self-start"
                    />
                  )}
                  <div
                    className={cn('max-w-xs sm:max-w-sm rounded-lg p-3 text-sm', {
                      'bg-primary text-primary-foreground': message.role === 'user',
                      'bg-muted': message.role === 'assistant',
                    })}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {conversation.length === 0 && (
                <div className="text-center text-muted-foreground pt-16 text-sm">
                  <p>Ask anything about our services, web design, or software development!</p>
                </div>
              )}
            </div>
          </ScrollArea>
          <footer className="p-4 border-t bg-muted rounded-b-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-2">
                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input
                          placeholder="Ask a question..."
                          {...field}
                          autoComplete="off"
                          disabled={pending}
                          className="bg-background"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={pending} size="icon">
                  <Send className="h-5 w-5" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </Form>
          </footer>
        </div>
      </PopoverContent>
    </Popover>
  );
}
