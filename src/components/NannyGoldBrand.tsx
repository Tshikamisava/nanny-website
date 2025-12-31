import type { ReactNode } from "react";

interface NannyGoldBrandProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
}

const NannyGoldBrand = ({ className = "", size = "md", children }: NannyGoldBrandProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl lg:text-4xl",
    xl: "text-4xl md:text-5xl lg:text-6xl"
  };

  return (
    <span 
      className={`font-script font-semibold ${sizeClasses[size]} ${className}`}
      style={{ 
        fontFamily: "'Dancing Script', cursive",
        lineHeight: '1.2',
        display: 'inline-block',
        paddingBottom: '0.1em'
      }}
    >
      {children || (
        <>
          <span style={{ color: '#FF1493' }}>Nanny</span>
          <span style={{ color: '#FFD700' }}>Gold</span>
        </>
      )}
    </span>
  );
};

export default NannyGoldBrand;

