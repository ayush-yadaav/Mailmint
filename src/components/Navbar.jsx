import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Home, BookOpen, HelpCircle, Phone, Users } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/dashboard", label: "Dashboard", icon: Mail },
    { path: "/saved", label: "Saved", icon: BookOpen },
    { path: "/faq", label: "FAQ", icon: HelpCircle },
    { path: "/about", label: "About", icon: Users },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Mail className="w-8 h-8 text-primary group-hover:animate-breathe" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all rounded-full" />
            </div>
            <span className="text-2xl font-display font-bold gradient-text">
              MailMint
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-transparent hover:bg-primary/10 text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            {navItems.slice(0, 3).map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`p-2 rounded-full transition-all hover:scale-105 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-transparent hover:bg-primary/10 text-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
