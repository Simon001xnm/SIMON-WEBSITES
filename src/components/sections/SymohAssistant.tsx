'use client';

import * as React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { askSymoh, type AskSymohOutput } from '@/ai/flows/symoh-assistant-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
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

export function SymohAssistant() {
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
      { role: 'assistant', content: '...' } // Add a placeholder for the assistant's response
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
    <section id="ai-assistant" className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
            <Card className="w-full shadow-xl border">
                <CardHeader className="text-center">
                    <Image 
                        src="/ROBO.png"
                        alt="Symoh AI Assistant"
                        width={80}
                        height={80}
                        className="mx-auto rounded-full border-4 border-primary p-1 shadow-lg"
                    />
                    <CardTitle className="text-2xl sm:text-3xl font-bold mt-4 flex items-center justify-center gap-2">
                        Ask Symoh <Sparkles className="h-6 w-6 text-primary" />
                    </CardTitle>
                    <CardDescription className="text-base sm:text-lg max-w-xl mx-auto mt-1">
                        Your friendly AI expert for web & software development questions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-80 w-full rounded-md border p-4 mb-4" ref={scrollAreaRef}>
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
                                        className={cn('max-w-md rounded-lg p-3 text-sm', {
                                            'bg-primary text-primary-foreground': message.role === 'user',
                                            'bg-muted': message.role === 'assistant',
                                        })}
                                    >
                                        <p className="whitespace-pre-wrap">{message.content}</p>
                                    </div>
                                </div>
                            ))}
                            {conversation.length === 0 && (
                                <div className="text-center text-muted-foreground pt-16">
                                    <p>Ask me anything about our services, web design, or software development!</p>
                                </div>
                            )}
                        </div>
                    </ScrollArea>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-2">
                             <FormField
                                control={form.control}
                                name="question"
                                render={({ field }) => (
                                    <FormItem className="flex-grow">
                                    <FormControl>
                                        <Input
                                            placeholder="e.g., 'What's the best tech stack for an e-commerce site?'"
                                            {...field}
                                            autoComplete="off"
                                            disabled={pending}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs"/>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={pending} size="icon">
                                <Send className="h-5 w-5"/>
                                <span className="sr-only">Send</span>
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
