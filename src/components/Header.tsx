import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="StudentPerks Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <span className="text-foreground hover:text-primary cursor-pointer transition-smooth">
                Categories
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
                <div className="p-2">
                  <a href="#" className="block px-3 py-2 text-sm hover:bg-secondary rounded">Travel</a>
                  <a href="#" className="block px-3 py-2 text-sm hover:bg-secondary rounded">Food</a>
                  <a href="#" className="block px-3 py-2 text-sm hover:bg-secondary rounded">Shopping</a>
                  <a href="#" className="block px-3 py-2 text-sm hover:bg-secondary rounded">Education</a>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <span className="text-foreground hover:text-primary cursor-pointer transition-smooth">
                Help & Support
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
                <div className="p-2">
                  <a href="#" className="block px-3 py-2 text-sm hover:bg-secondary rounded">FAQ</a>
                  <a href="#" className="block px-3 py-2 text-sm hover:bg-secondary rounded">Contact Us</a>
                  <a href="#" className="block px-3 py-2 text-sm hover:bg-secondary rounded">Terms of Service</a>
                  <a href="#" className="block px-3 py-2 text-sm hover:bg-secondary rounded">Privacy Policy</a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <span className="text-foreground hover:text-primary cursor-pointer transition-smooth">
                Partner With Us
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
                <div className="p-2">
                  <a href="#" className="block px-3 py-2 text-sm hover:bg-secondary rounded">Become a Partner</a>
                  <a href="#" className="block px-3 py-2 text-sm hover:bg-secondary rounded">Partner Portal</a>
                  <a href="#" className="block px-3 py-2 text-sm hover:bg-secondary rounded">Success Stories</a>
                  <a href="#" className="block px-3 py-2 text-sm hover:bg-secondary rounded">Resources</a>
                </div>
              </div>
            </div>
          </nav>

          {/* Sign In Button - Desktop */}
          <div className="hidden md:block">
            <Button variant="outline" className="mr-2">Sign In</Button>
            <Button>Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 pt-4">
              <div>
                <span className="font-medium text-foreground mb-2 block">Categories</span>
                <div className="ml-4 space-y-2">
                  <a href="#" className="block text-muted-foreground hover:text-primary">Travel</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary">Food</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary">Shopping</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary">Education</a>
                </div>
              </div>
              
              <div>
                <span className="font-medium text-foreground mb-2 block">Help & Support</span>
                <div className="ml-4 space-y-2">
                  <a href="#" className="block text-muted-foreground hover:text-primary">FAQ</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary">Contact Us</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary">Terms</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary">Privacy</a>
                </div>
              </div>

              <div>
                <span className="font-medium text-foreground mb-2 block">Partner With Us</span>
                <div className="ml-4 space-y-2">
                  <a href="#" className="block text-muted-foreground hover:text-primary">Become a Partner</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary">Partner Portal</a>
                </div>
              </div>

              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">Sign In</Button>
                <Button>Sign Up</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;