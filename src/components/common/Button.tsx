
import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  isLoading = false,
  loadingText,
  icon,
  iconPosition = 'left',
  ...props 
}: ButtonProps) => {
  const baseClasses = "font-montserrat font-semibold rounded-md transition-all duration-300 inline-flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-finpro-gold text-white hover:shadow-lg hover:shadow-finpro-gold/20 focus:ring-2 focus:ring-finpro-gold/50",
    secondary: "bg-finpro-red text-white hover:shadow-lg hover:shadow-finpro-red/20 focus:ring-2 focus:ring-finpro-red/50",
    outline: "border-2 border-finpro-red text-finpro-red hover:bg-finpro-red/10 focus:ring-2 focus:ring-finpro-red/50",
    ghost: "text-finpro-red hover:bg-finpro-red/10 focus:ring-2 focus:ring-finpro-red/50"
  };
  
  const sizeClasses = {
    sm: "text-sm px-4 py-1.5 gap-1.5",
    md: "text-base px-6 py-2 gap-2",
    lg: "text-lg px-8 py-3 gap-2.5"
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>{loadingText || children}</span>
        </>
      );
    }

    if (icon && iconPosition === 'left') {
      return (
        <>
          {icon}
          <span>{children}</span>
        </>
      );
    }

    if (icon && iconPosition === 'right') {
      return (
        <>
          <span>{children}</span>
          {icon}
        </>
      );
    }

    return children;
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        isLoading && "cursor-not-allowed",
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
