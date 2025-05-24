import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

// SDG goal colors and their darker shades
const goalColors = {
  1: { main: "#E5243B", dark: "#B71C2B" },
  2: { main: "#DDA63A", dark: "#A67C1A" },
  3: { main: "#4C9F38", dark: "#276B2A" },
  4: { main: "#C5192D", dark: "#8B1420" },
  5: { main: "#FF3A21", dark: "#B22A18" },
  6: { main: "#26BDE2", dark: "#0A6B8A" },
  7: { main: "#FCC30B", dark: "#B38F0A" },
  8: { main: "#A21942", dark: "#6D1330" },
  9: { main: "#FD6925", dark: "#B34713" },
  10: { main: "#DD1367", dark: "#8B0E4B" },
  11: { main: "#FD9D24", dark: "#B37F0A" },
  12: { main: "#BF8B2E", dark: "#8B6B1A" },
  13: { main: "#3F7E44", dark: "#2B4A1D" },
  14: { main: "#0A97D9", dark: "#18647E" },
  15: { main: "#56C02B", dark: "#3A6B1A" },
  16: { main: "#00689D", dark: "#144074" },
  17: { main: "#19486A", dark: "#2B2D64" },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Detect if on a goal page
  const goalMatch = location.pathname.match(/^\/goals\/(\d{1,2})$/);
  const goalNum = goalMatch ? parseInt(goalMatch[1], 10) : null;
  const isGoalPage = !!goalNum && goalNum >= 1 && goalNum <= 17;

  const isBlueprint = location.pathname === "/blueprint";

  let navBg = "bg-white";
  let navBorder = "border-green-800";
  let navText = "text-gray-700";
  let navTextHover = "hover:text-gray-900";
  let logoText = "text-green-800";

  if (isBlueprint) {
    navBg = "bg-blue-900";
    navBorder = "border-blue-900";
    navText = "text-blue-100";
    navTextHover = "hover:text-blue-300";
    logoText = "text-blue-200";
  } else if (isGoalPage && goalColors[goalNum]) {
    navBg = "";
    navBorder = "";
    navText = "text-white";
    navTextHover = "hover:text-gray-200";
    logoText = "text-white";
  }

  // Inline style for goal background and border
  const goalBgStyle = isGoalPage && goalColors[goalNum] ? {
    backgroundColor: goalColors[goalNum].dark,
    borderBottom: `2px solid ${goalColors[goalNum].dark}`,
  } : undefined;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`relative ${navBg} ${navBorder} fixed w-full z-50`}
      style={goalBgStyle}
    >
      <div className={`absolute inset-0 ${isBlueprint ? 'bg-blue-900 bg-opacity-80' : isGoalPage && goalColors[goalNum] ? '' : 'bg-green-800 bg-opacity-10'} z-0 w-full h-full pointer-events-none`} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center relative z-10">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/icons/earth-leaf.png" alt="logo" className="w-8 h-8" />
              <span className={`text-2xl font-bold px-3 py-1 rounded-md ${logoText}`}>
                Sustainable for Future
              </span>
            </Link>
          </div>

          {isMobile ? (
            <>
              <div className="flex items-center">
                <button
                  onClick={toggleMenu}
                  className={`inline-flex items-center justify-center p-2 rounded-md ${navText} ${navTextHover} hover:bg-gray-100`}
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Mobile menu */}
              {menuOpen && (
                <div className={`absolute top-16 left-0 right-0 ${navBg} shadow-md border-b border-gray-200 z-50`} style={goalBgStyle}>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link
                      to="/"
                      className={`block px-3 py-2 rounded-md text-base font-medium ${navText} ${navTextHover} font-bold`}
                      onClick={toggleMenu}
                    >
                      Home
                    </Link>
                    <Link
                      to="/goals"
                      className={`block px-3 py-2 rounded-md text-base font-medium ${navText} ${navTextHover}`}
                      onClick={toggleMenu}
                    >
                      The 17 Goals
                    </Link>
                    <Link
                      to="/product-recommender"
                      className={`block px-3 py-2 rounded-md text-base font-medium ${navText} ${navTextHover}`}
                      onClick={toggleMenu}
                    >
                      Sustainable Product Recommender
                    </Link>
                    <div className="mt-4">
                      <Button className="w-full" variant="default">
                        Take Action
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/" className={`px-3 py-2 font-bold ${navText} ${navTextHover}`}>
                      Home
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>The 17 Goals</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-1 gap-3 p-4 w-[250px]">
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/goals" 
                            className="block p-3 hover:bg-gray-100 rounded-md"
                          >
                            <div className="text-sm font-medium">All Goals</div>
                            <div className="text-xs text-gray-500">View all 17 sustainable development goals</div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/product-recommender" className={`px-3 py-2 font-semibold flex items-center gap-2 ${navText} ${navTextHover}`}>
                      <span role="img" aria-label="cart">🛒</span> Sustainable Product Recommender
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/carbon-calculator" className={`px-3 py-2 font-bold ${navText} ${navTextHover}`}>
                      <span role="img" aria-label="footprint">👣</span> Carbon Calculator
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Button className="ml-4" variant="default">
                Take Action
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
