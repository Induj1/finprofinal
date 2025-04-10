
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimatedElementProps = {
  children: React.ReactNode;
  animation: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'scale-in' | 'slide-in-right' | 'slide-in-left';
  duration?: number;
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
};

export const AnimatedElement = ({
  children,
  animation,
  duration = 600,
  delay = 0,
  className,
  threshold = 0.1,
  once = true,
}: AnimatedElementProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationClass = `animate-${animation}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !(once && hasAnimated)) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentElement = document.getElementById(`animated-element-${animation}-${delay}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animation, delay, hasAnimated, once, threshold]);

  return (
    <div
      id={`animated-element-${animation}-${delay}`}
      className={cn(
        isVisible ? animationClass : 'opacity-0',
        className
      )}
      style={{ 
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
};

// Add custom CSS for shadow glow effect
const style = document.createElement('style');
style.textContent = `
  .shadow-glow {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5);
    transition: box-shadow 0.3s ease;
  }
  .shadow-glow:hover {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.7);
  }
`;
document.head.appendChild(style);

export const FadeIn = (props: Omit<AnimatedElementProps, 'animation'>) => (
  <AnimatedElement animation="fade-in" {...props} />
);

export const FadeInUp = (props: Omit<AnimatedElementProps, 'animation'>) => (
  <AnimatedElement animation="fade-in-up" {...props} />
);

export const FadeInDown = (props: Omit<AnimatedElementProps, 'animation'>) => (
  <AnimatedElement animation="fade-in-down" {...props} />
);

export const ScaleIn = (props: Omit<AnimatedElementProps, 'animation'>) => (
  <AnimatedElement animation="scale-in" {...props} />
);

export const SlideInRight = (props: Omit<AnimatedElementProps, 'animation'>) => (
  <AnimatedElement animation="slide-in-right" {...props} />
);

export const SlideInLeft = (props: Omit<AnimatedElementProps, 'animation'>) => (
  <AnimatedElement animation="slide-in-left" {...props} />
);
