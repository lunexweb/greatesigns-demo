import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { companyConfig } from "@/config/company";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl logo-text text-primary">
              {companyConfig.name}
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                className="text-base"
              >
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant={isActive("/about") ? "default" : "ghost"}
                className="text-base"
              >
                About
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant={isActive("/services") ? "default" : "ghost"}
                className="text-base"
              >
                Services
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block"
                >
                  <Button 
                    variant={isActive("/") ? "default" : "ghost"}
                    className="w-full justify-start text-base"
                  >
                    Home
                  </Button>
                </Link>
                <Link 
                  to="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block"
                >
                  <Button 
                    variant={isActive("/about") ? "default" : "ghost"}
                    className="w-full justify-start text-base"
                  >
                    About
                  </Button>
                </Link>
                <Link 
                  to="/services" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block"
                >
                  <Button 
                    variant={isActive("/services") ? "default" : "ghost"}
                    className="w-full justify-start text-base"
                  >
                    Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
