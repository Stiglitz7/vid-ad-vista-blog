
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoGrid from "@/components/VideoGrid";
import Sidebar from "@/components/Sidebar";
import AdBanner from "@/components/AdBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 ml-16 lg:ml-64">
          <Hero />
          
          <div className="py-4 px-4 md:px-8">
            <AdBanner variant="horizontal" />
          </div>
          
          <VideoGrid 
            title="Trending Videos" 
            description="Most watched videos this week"
          />
          
          <VideoGrid 
            title="Latest Uploads" 
            description="Fresh content for you"
          />
          
          <VideoGrid 
            title="Technology Reviews" 
            description="Unbiased tech reviews"
          />
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
