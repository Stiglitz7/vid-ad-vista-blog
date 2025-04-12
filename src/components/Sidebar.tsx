
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import AdBanner from "./AdBanner";
import { 
  Home, 
  Flame, 
  Clock, 
  Bookmark, 
  History, 
  ChevronRight, 
  ChevronLeft,
  Gamepad2,
  Music,
  Film,
  ShoppingBag,
  BookOpen,
  Rocket,
  HeartPulse,
  Utensils
} from "lucide-react";

const categories = [
  { name: "Gaming", icon: Gamepad2 },
  { name: "Music", icon: Music },
  { name: "Movies", icon: Film },
  { name: "Shopping", icon: ShoppingBag },
  { name: "Education", icon: BookOpen },
  { name: "Science", icon: Rocket },
  { name: "Health", icon: HeartPulse },
  { name: "Food", icon: Utensils },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div 
      className={`fixed top-16 left-0 h-[calc(100vh-64px)] bg-card border-r border-border transition-all duration-300 z-40 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="absolute right-0 top-4 translate-x-1/2 z-20">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-6 w-6 rounded-full bg-card border-border"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
          </Button>
        </div>

        <ScrollArea className="flex-1 py-4">
          <div className="space-y-1 px-2">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              {!collapsed && <span>Home</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Flame className="mr-2 h-4 w-4" />
              {!collapsed && <span>Trending</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Clock className="mr-2 h-4 w-4" />
              {!collapsed && <span>Latest</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bookmark className="mr-2 h-4 w-4" />
              {!collapsed && <span>Bookmarks</span>}
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <History className="mr-2 h-4 w-4" />
              {!collapsed && <span>History</span>}
            </Button>
          </div>

          {!collapsed && (
            <div className="mt-6 px-3">
              <h3 className="mb-2 px-2 text-sm font-semibold">Categories</h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant="ghost"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link to={`/category/${category.name.toLowerCase()}`}>
                      <category.icon className="mr-2 h-4 w-4" />
                      <span>{category.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {!collapsed && (
            <div className="mt-6 px-3">
              <h3 className="mb-2 px-2 text-sm font-semibold">Advertisement</h3>
              <AdBanner variant="square" className="mx-auto" />
            </div>
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default Sidebar;
