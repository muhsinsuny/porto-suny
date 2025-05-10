import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "flex items-center justify-center shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-accent',",
  {
    variants: {
      variant: {
        default:
          'bg-primary-200 md:text-md-bold text-sm-bold text-neutral-950 rounded-full hover:shadow-[0_0_17px_rgba(145,255,2,0.4)] ',
        outline:
          'border border-neutral-800 rounded-full hover:border-neutral-700',
      },
      size: {
        default: 'h-14 px-4 py-2 has-[>svg]:px-3',
        icon: 'size-12 md:size-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
