import { useEffect, useRef, useState } from "react";

interface MovingHighlightProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const MovingHighlight = ({ children, className = "", delay = 0 }: MovingHighlightProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset and trigger animation when entering viewport
            setIsVisible(false);
            setTimeout(() => {
              setIsVisible(true);
            }, delay + 50);
          } else {
            // Reset when leaving viewport for re-trigger capability
            setIsVisible(false);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '20px 0px -20px 0px' // Better trigger zones
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <span 
      ref={elementRef}
      className={`relative inline-block ${className}`}
      style={{ contain: 'layout style paint' }}
    >
      {/* Moving highlight sweep - BEHIND the text */}
      <span
        className={`absolute top-0 left-0 h-full w-full pointer-events-none ${
          isVisible ? 'animate-gold-sweep' : ''
        }`}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.3) 30%, rgba(255, 215, 0, 0.5) 50%, rgba(255, 215, 0, 0.3) 70%, transparent 100%)',
          zIndex: -1,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />
      
      {/* Text content - ABOVE the highlight */}
      <span className="relative z-10 gradient-text">
        {children}
      </span>
    </span>
  );
};

export default MovingHighlight;