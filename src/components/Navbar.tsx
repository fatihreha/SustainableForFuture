
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
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-blue-600 text-white px-3 py-1 rounded-md">
                Global Goals
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
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
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
                      to="/about"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={toggleMenu}
                    >
                      About
                    </Link>
                    <Link
                      to="/resources"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={toggleMenu}
                    >
                      Resources
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
                    <Link to="/" className="px-3 py-2 text-gray-700 hover:text-gray-900">
                      Home
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>The 17 Goals</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/goals" 
                            className="block p-3 hover:bg-gray-100 rounded-md"
                          >
                            <div className="text-sm font-medium">All Goals</div>
                            <div className="text-xs text-gray-500">View all 17 sustainable development goals</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/goals/1" 
                            className="block p-3 hover:bg-gray-100 rounded-md"
                          >
                            <div className="text-sm font-medium">Goal 1: No Poverty</div>
                            <div className="text-xs text-gray-500">End poverty in all its forms</div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-gray-900">
                      About
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/resources" className="px-3 py-2 text-gray-700 hover:text-gray-900">
                      Resources
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
