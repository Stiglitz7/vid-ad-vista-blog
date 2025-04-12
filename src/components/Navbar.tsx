
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, Video } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4 md:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 mr-6">
            <Video className="w-8 h-8 text-video" />
            <span className="text-xl font-bold hidden md:inline-block">Vid-Ad-Vista</span>
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/category/technology">Technology</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/category/entertainment">Entertainment</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/category/gaming">Gaming</Link>
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative w-full max-w-xs hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search videos..."
              className="w-full pl-8 bg-secondary"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          
          <Button variant="default" className="hidden md:inline-flex">
            Upload
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
