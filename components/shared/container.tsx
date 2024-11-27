import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  maxWidth?: string; // Опциональная ширина
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  maxWidth = '1280px',
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(`mx-auto px-4 sm:px-6 lg:px-8 max-w-[${maxWidth}]`, className)}
    >
      {children}
    </div>
  );
};
