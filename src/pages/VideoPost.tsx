
import { useState } from "react";
import { useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Bookmark, 
  MessageSquare 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import VideoGrid from "@/components/VideoGrid";
import AdBanner from "@/components/AdBanner";

// Sample video data
const videoData = {
  id: "video1",
  title: "10 Tech Gadgets That Will Blow Your Mind in 2025",
  description: `In this comprehensive video, we explore the most exciting tech gadgets set to revolutionize our lives in 2025. From advanced AI assistants to holographic displays and quantum computing devices for consumers, these innovations push the boundaries of what technology can achieve.

We also dive deep into the practical applications of these gadgets and how they'll integrate into our daily routines, making everything from work to entertainment more immersive and efficient.
  
Don't forget to subscribe for more future tech content and leave your thoughts in the comments below!`,
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80",
  views: 1250000,
  date: new Date(2024, 3, 5),
  duration: "12:45",
  author: "Tech Insider",
  authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
  subscribers: 2450000,
  likes: 43000,
  dislikes: 850,
  comments: 3250
};

const VideoPost = () => {
  const { id } = useParams();
  const [tab, setTab] = useState("description");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 ml-16 lg:ml-64">
          <div className="container px-4 md:px-8 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Video Player */}
                <div className="aspect-video rounded-lg overflow-hidden bg-black">
                  <iframe 
                    src={videoData.videoUrl} 
                    className="w-full h-full"
                    title={videoData.title}
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Video Info */}
                <div>
                  <h1 className="text-2xl font-bold">{videoData.title}</h1>
                  <div className="flex flex-wrap items-center justify-between mt-4">
                    <div className="flex items-center">
                      <img 
                        src={videoData.authorAvatar} 
                        alt={videoData.author}
                        className="w-10 h-10 rounded-full mr-3" 
                      />
                      <div>
                        <h3 className="font-medium">{videoData.author}</h3>
                        <p className="text-sm text-muted-foreground">{videoData.subscribers.toLocaleString()} subscribers</p>
                      </div>
                      <Button className="ml-4 bg-video hover:bg-video-hover">Subscribe</Button>
                    </div>
                    
                    <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                      <Button variant="outline" className="space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{videoData.likes.toLocaleString()}</span>
                      </Button>
                      <Button variant="outline" className="space-x-1">
                        <ThumbsDown className="w-4 h-4" />
                        <span>{videoData.dislikes.toLocaleString()}</span>
                      </Button>
                      <Button variant="outline">
                        <Share2 className="w-4 h-4 mr-1" />
                        <span>Share</span>
                      </Button>
                      <Button variant="outline">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Video Details */}
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span>{videoData.views.toLocaleString()} views</span>
                    <span className="mx-2">•</span>
                    <span>{formatDistanceToNow(videoData.date, { addSuffix: true })}</span>
                  </div>
                  
                  <Tabs defaultValue="description" value={tab} onValueChange={setTab}>
                    <TabsList className="mb-4">
                      <TabsTrigger value="description">Description</TabsTrigger>
                      <TabsTrigger value="comments">
                        Comments ({videoData.comments.toLocaleString()})
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="description" className="space-y-4">
                      <p className="whitespace-pre-line">{videoData.description}</p>
                    </TabsContent>
                    
                    <TabsContent value="comments">
                      <div className="flex items-start space-x-4 mb-6">
                        <img 
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=50&h=50&q=80" 
                          alt="User" 
                          className="w-10 h-10 rounded-full" 
                        />
                        <div className="flex-1">
                          <textarea 
                            className="w-full rounded-lg border border-border p-3 bg-background resize-none" 
                            rows={3} 
                            placeholder="Add a comment..."
                          ></textarea>
                          <div className="flex justify-end mt-2">
                            <Button>Comment</Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {/* Sample comments */}
                        <div className="flex space-x-4">
                          <img 
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&h=50&q=80" 
                            alt="Commenter" 
                            className="w-10 h-10 rounded-full" 
                          />
                          <div>
                            <div className="flex items-center">
                              <h4 className="font-medium">TechEnthusiast</h4>
                              <span className="text-muted-foreground text-sm ml-2">3 days ago</span>
                            </div>
                            <p className="mt-1">These gadgets look amazing! I can't wait to see what the holographic display can do in real-world applications.</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm">
                              <button className="flex items-center text-muted-foreground hover:text-foreground">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                <span>245</span>
                              </button>
                              <button className="flex items-center text-muted-foreground hover:text-foreground">
                                <ThumbsDown className="w-4 h-4 mr-1" />
                                <span>12</span>
                              </button>
                              <button className="text-muted-foreground hover:text-foreground">Reply</button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-4">
                          <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&h=50&q=80" 
                            alt="Commenter" 
                            className="w-10 h-10 rounded-full" 
                          />
                          <div>
                            <div className="flex items-center">
                              <h4 className="font-medium">FutureTech</h4>
                              <span className="text-muted-foreground text-sm ml-2">5 days ago</span>
                            </div>
                            <p className="mt-1">Great video as always! I think the AI assistants are going to be game-changers in how we interact with our homes and workplaces.</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm">
                              <button className="flex items-center text-muted-foreground hover:text-foreground">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                <span>189</span>
                              </button>
                              <button className="flex items-center text-muted-foreground hover:text-foreground">
                                <ThumbsDown className="w-4 h-4 mr-1" />
                                <span>5</span>
                              </button>
                              <button className="text-muted-foreground hover:text-foreground">Reply</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              
              {/* Sidebar Content */}
              <div className="space-y-6">
                <AdBanner variant="square" className="mb-6" />
                
                <div>
                  <h3 className="font-semibold mb-4">You might also like</h3>
                  <div className="space-y-4">
                    {Array(5).fill(0).map((_, i) => (
                      <div key={i} className="flex space-x-3">
                        <div className="flex-shrink-0 w-40 h-24 bg-secondary rounded-md overflow-hidden">
                          <img 
                            src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000}?auto=format&fit=crop&w=160&h=90&q=80`} 
                            alt="Related video" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium line-clamp-2">Amazing Tech Innovation #${i + 1} - Future Technology</h4>
                          <p className="text-xs text-muted-foreground mt-1">TechChannel</p>
                          <p className="text-xs text-muted-foreground">250K views • 2 weeks ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <AdBanner variant="vertical" />
              </div>
            </div>
          </div>
          
          <VideoGrid title="More from Tech Insider" showAds={false} />
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default VideoPost;
