import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent className='w-full md:flex md:h-[288] md:w-[481] md:flex-col md:items-center'>
        <DialogHeader className='z-30 h-34.25 md:h-42'>
          <Image
            src={
              variant === 'success'
                ? '/icons/message-success.svg'
                : '/icons/icon-form-message-error.svg'
            }
            alt={variant === 'success' ? 'success' : 'error'}
            width={147}
            height={132}
            className='absolute top-1/2 left-1/2 z-100 -translate-x-1/2 -translate-y-30 scale-100 md:left-1/2 md:-translate-x-10 md:-translate-y-50 md:scale-130'
          />
        </DialogHeader>
        <DialogBody className='md:flex-center z-10 h-[233] px-8 pt-18 md:flex md:max-w-120 md:flex-col md:px-4 md:pt-25'>
          <DialogTitle>
            {variant === 'success'
              ? 'Message Sent Successfully!'
              : 'Oops! Your message couldn’t be sent.'}
          </DialogTitle>
          <DialogDescription className='text-center'>
            {variant === 'success'
              ? 'Thank you for reaching out. I’ll get back to you as soon as possible'
              : 'Please try again later or check your internet connection.'}
          </DialogDescription>
          <DialogClose asChild>
            <Button className='text-sm-bold mx-auto mt-6 w-full text-neutral-950 md:mt-4 md:w-1/2'>
              {loading ? 'Loading...' : 'BACK TO HOME'}
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
