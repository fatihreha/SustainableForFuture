import React from "react";
import { Link } from "react-router-dom";
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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative bg-white border-b-2 border-green-800 fixed w-full z-50">
      <div className="absolute inset-0 bg-green-800 bg-opacity-10 z-0 w-full h-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center relative z-10">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/icons/earth-leaf.png" alt="logo" className="w-8 h-8" />
              <span className="text-2xl font-bold px-3 py-1 rounded-md" style={{ color: '#14532d' }}>
                Sustainable for Future
              </span>
            </Link>
          </div>

          {isMobile ? (
            <>
              <div className="flex items-center">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Mobile menu */}
              {menuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-md border-b border-gray-200 z-50">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link
                      to="/"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-bold"
                      onClick={toggleMenu}
                    >
                      Home
                    </Link>
                    <Link
                      to="/goals"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={toggleMenu}
                    >
                      The 17 Goals
                    </Link>
                    <Link
                      to="/product-recommender"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
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
                    <Link to="/" className="px-3 py-2 text-gray-700 hover:text-gray-900 font-bold">
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
                    <Link to="/product-recommender" className="px-3 py-2 text-gray-700 hover:text-gray-900 font-semibold flex items-center gap-2">
                      <span role="img" aria-label="cart">🛒</span> Sustainable Product Recommender
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/carbon-calculator" className="px-3 py-2 text-gray-700 hover:text-gray-900 font-bold">
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
