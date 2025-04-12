
import VideoCard from "./VideoCard";
import AdBanner from "./AdBanner";

// Sample data
const videos = [
  {
    id: "video1",
    title: "10 Tech Gadgets That Will Blow Your Mind in 2025",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    views: 1250000,
    date: new Date(2024, 3, 5),
    duration: "12:45",
    author: "Tech Insider"
  },
  {
    id: "video2",
    title: "How to Build a Website in 10 Minutes - Complete Beginner Guide",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    views: 892500,
    date: new Date(2024, 3, 8),
    duration: "10:30",
    author: "CodeMaster"
  },
  {
    id: "video3",
    title: "The Truth About Artificial Intelligence - What's Real and What's Hype",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    views: 2450000,
    date: new Date(2024, 3, 2),
    duration: "18:22",
    author: "Future Tech Today"
  },
  {
    id: "video4",
    title: "5G Technology Explained: The Good, The Bad, and The Future",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    views: 750000,
    date: new Date(2024, 3, 10),
    duration: "15:18",
    author: "Connect World"
  },
  {
    id: "video5",
    title: "Learn Programming in 30 Days - Day 1: Fundamentals",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    views: 1120000,
    date: new Date(2024, 3, 1),
    duration: "22:05",
    author: "Code Academy Pro"
  },
  {
    id: "video6",
    title: "How to Make $100 a Day with Your Blog - Proven Methods",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    views: 985000,
    date: new Date(2024, 3, 7),
    duration: "14:30",
    author: "Monetize Media"
  },
];

interface VideoGridProps {
  title: string;
  description?: string;
  showAds?: boolean;
}

const VideoGrid = ({ title, description, showAds = true }: VideoGridProps) => {
  return (
    <section className="py-8">
      <div className="container px-4 md:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          {description && <p className="text-muted-foreground mt-1">{description}</p>}
        </div>
        
        {showAds && (
          <div className="mb-8">
            <AdBanner variant="horizontal" />
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <>
              <VideoCard key={video.id} {...video} />
              {showAds && index === 2 && (
                <div className="col-span-full my-6">
                  <AdBanner variant="horizontal" className="bg-secondary/30" />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;
