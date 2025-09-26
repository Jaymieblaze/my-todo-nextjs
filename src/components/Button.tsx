import React from 'react';

type ButtonVariant = 'default' | 'outline' | 'secondary' | 'destructive' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseStyle = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white dark:ring-offset-slate-950';
    
    const variants: Record<ButtonVariant, string> = {
      default: 'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600',
      outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-300 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700',
      destructive: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 dark:bg-red-700 dark:hover:bg-red-800',
      ghost: 'hover:bg-gray-100 text-gray-900 focus-visible:ring-gray-300 dark:hover:bg-slate-800 dark:text-slate-50',
      link: 'text-indigo-600 hover:underline focus-visible:ring-indigo-500 dark:text-indigo-400',
    };

    const sizes: Record<ButtonSize, string> = {
      sm: 'h-9 px-3',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-8',
      icon: 'h-10 w-10',
    };

    return (
      <button
        className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);


Button.displayName = 'Button';

export default Button;
