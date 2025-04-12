
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  views: number;
  date: Date;
  duration: string;
  author: string;
  featured?: boolean;
  className?: string;
}

const VideoCard = ({
  id,
  title,
  thumbnail,
  views,
  date,
  duration,
  author,
  featured = false,
  className
}: VideoCardProps) => {
  return (
    <Link 
      to={`/video/${id}`}
      className={cn(
        "group block rounded-lg overflow-hidden video-card-shadow hover:scale-[1.02] transition-all duration-300",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-video/80 flex items-center justify-center">
            <Play className="w-6 h-6 fill-white text-white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
          {duration}
        </div>
      </div>
      <div className="p-3 bg-card">
        <h3 className={cn(
          "line-clamp-2 font-medium leading-tight",
          featured ? "text-lg" : "text-base"
        )}>
          {title}
        </h3>
        <div className="flex items-center mt-2 text-muted-foreground text-sm">
          <span>{views.toLocaleString()} views</span>
          <span className="mx-2">•</span>
          <span>{formatDistanceToNow(date, { addSuffix: true })}</span>
        </div>
        <div className="mt-1 text-sm text-muted-foreground">
          {author}
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
