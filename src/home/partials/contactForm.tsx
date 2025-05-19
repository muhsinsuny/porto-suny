'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
// import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  // FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { Section } from '../../components/layouts/section';
import FormStatusDialog from '../../components/ui/form-status-dialog';
import { Textarea } from '../../components/ui/textarea';

const contactSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Please enter a valid email address'),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .min(20, 'Message must be at least 20 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);

  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }

  return (
    <Section subtitle='CONTACT' title='LET’S GET IN TOUCH' id='contact'>
      <Form {...form}>
        <form
          className='w-full space-y-5'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm-semibold text-neutral-25'>
                  Name
                </FormLabel>
                <Input
                  className='bg-base-background rounded-xl border-1 border-neutral-800'
                  disabled={loading}
                  placeholder='Input your name'
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input
                  className='bg-base-background rounded-xl border-1 border-neutral-800'
                  disabled={loading}
                  placeholder='Input your email'
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <Textarea
                  className='bg-base-background rounded-xl border-1 border-neutral-800'
                  disabled={loading}
                  placeholder='Input your message'
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={loading} className='mt-6 w-full md:mt-10'>
            {loading ? <ClipLoader size={20} color='#fff' /> : 'Send Message'}
          </Button>
        </form>
      </Form>
      <FormStatusDialog
        open={showDialog}
        variant={variant}
        loading={loading}
        onOpenChange={setShowDialog}
      />
    </Section>
  );
};

export default ContactForm;
