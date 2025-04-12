
import { cn } from "@/lib/utils";

interface AdBannerProps {
  variant?: "horizontal" | "vertical" | "square";
  className?: string;
}

const AdBanner = ({ variant = "horizontal", className }: AdBannerProps) => {
  const sizes = {
    horizontal: "h-24 md:h-32 w-full",
    vertical: "h-96 md:h-[600px] w-full md:w-[300px]",
    square: "h-64 w-full md:w-64"
  };

  const adText = {
    horizontal: "Advertisement Banner",
    vertical: "Vertical Ad Space",
    square: "Square Ad"
  };

  return (
    <div 
      className={cn(
        "bg-secondary/50 border border-ad/30 rounded-md flex items-center justify-center text-muted-foreground ad-shadow relative overflow-hidden group",
        sizes[variant],
        className
      )}
    >
      <div className="absolute top-1 right-2 text-xs bg-ad text-white px-1 rounded">Ad</div>
      <p className="text-sm md:text-base">{adText[variant]}</p>
      <div className="absolute inset-0 bg-gradient-to-r from-ad/10 to-ad/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default AdBanner;
