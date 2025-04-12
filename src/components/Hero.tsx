
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdBanner from "./AdBanner";

const featuredVideo = {
  id: "featured1",
  title: "The Ultimate Guide to Content Creation in 2025",
  description: "Learn the newest strategies and tools that top creators are using to build their audiences and monetize their content effectively.",
  thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1920&q=80",
  duration: "28:45",
  views: 3750000,
  author: "Content Creator Pro",
};

const Hero = () => {
  return (
    <section className="relative pt-6 pb-12">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/4">
            <Link to={`/video/${featuredVideo.id}`} className="group block">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img 
                  src={featuredVideo.thumbnail} 
                  alt={featuredVideo.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">{featuredVideo.title}</h1>
                    <p className="text-white/80 mb-4 line-clamp-2 md:line-clamp-none">{featuredVideo.description}</p>
                    <div className="flex items-center">
                      <Button variant="default" className="bg-video hover:bg-video-hover">
                        <Play className="w-5 h-5 mr-2" /> Watch Now
                      </Button>
                      <div className="ml-4">
                        <span className="block text-sm">{featuredVideo.views.toLocaleString()} views</span>
                        <span className="block text-sm text-white/70">{featuredVideo.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/80 text-white text-sm px-2 py-1 rounded">
                  {featuredVideo.duration}
                </div>
              </div>
            </Link>
          </div>
          
          <div className="lg:w-1/4">
            <AdBanner variant="vertical" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
