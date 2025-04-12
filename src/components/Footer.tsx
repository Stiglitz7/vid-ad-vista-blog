
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Video } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Video className="w-6 h-6 text-video" />
              <span className="text-lg font-bold">Vid-Ad-Vista</span>
            </div>
            <p className="text-muted-foreground">
              The ultimate platform for video content and advertisements.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-muted-foreground hover:text-video">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-video">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-video">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-video">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/videos" className="text-muted-foreground hover:text-foreground">Videos</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-foreground">Categories</Link></li>
              <li><Link to="/trending" className="text-muted-foreground hover:text-foreground">Trending</Link></li>
              <li><Link to="/latest" className="text-muted-foreground hover:text-foreground">Latest</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/technology" className="text-muted-foreground hover:text-foreground">Technology</Link></li>
              <li><Link to="/category/entertainment" className="text-muted-foreground hover:text-foreground">Entertainment</Link></li>
              <li><Link to="/category/gaming" className="text-muted-foreground hover:text-foreground">Gaming</Link></li>
              <li><Link to="/category/education" className="text-muted-foreground hover:text-foreground">Education</Link></li>
              <li><Link to="/category/lifestyle" className="text-muted-foreground hover:text-foreground">Lifestyle</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Advertisers</h3>
            <ul className="space-y-2">
              <li><Link to="/advertise" className="text-muted-foreground hover:text-foreground">Advertise With Us</Link></li>
              <li><Link to="/ad-policy" className="text-muted-foreground hover:text-foreground">Ad Policy</Link></li>
              <li><Link to="/ad-formats" className="text-muted-foreground hover:text-foreground">Ad Formats</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vid-Ad-Vista. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-foreground text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
