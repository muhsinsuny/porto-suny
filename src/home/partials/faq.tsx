'use client';

import { LucideSparkles } from 'lucide-react';
import React from 'react';

import faqs from '@/constants/faqs.data';

export const FAQSection = () => {
  return (
    <section className='bg-black px-4 py-16 text-white sm:px-6 lg:px-8'>
      <div className='mx-auto mb-12 max-w-5xl text-center'>
        <p className='mb-1 text-sm text-lime-400'>FAQ</p>
        <h2 className='inline-block border-b border-dashed pb-2 text-3xl font-bold sm:text-4xl'>
          FREQUENTLY ASKED QUESTIONS
        </h2>
      </div>

      <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className='space-y-4 rounded-md border border-dashed border-lime-400 bg-zinc-900 p-6'
          >
            <div className='flex items-start gap-2 text-lime-400'>
              <LucideSparkles className='mt-1' size={18} />
              <h3 className='font-semibold text-white'>{faq.question}</h3>
            </div>
            <p className='text-sm text-zinc-300'>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
