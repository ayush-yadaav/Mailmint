import { Mail, Github, Linkedin, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // if using React Router

const Footer = () => {
  return (
    // <footer className="relative mt-20 border-t bg-primary/10 border border-primary/20  px-4 py-2  backdrop-blur-xl text-muted-foreground">
    <footer className="relative mt-20 border-t  border   px-4 py-2  backdrop-blur-xl text-muted-foreground  border-b border-border/50">
      {/* Floating Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-transparent blur-3xl opacity-40"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-6 relative z-10"
      >
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Brand */}
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-lg font-display text-white tracking-wide">
              <span className="text-2xl font-display font-bold gradient-text">
              MailMint
            </span>
            </h2>
           
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:justify-center md:gap-6">
            <Link
              to="/about"
              className="hover:text-primary transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/faq"
              className="hover:text-primary transition-colors text-sm font-medium"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>

         <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center text-sm text-muted-foreground">
         
          <p>© {new Date().getFullYear()} MailMint. All rights reserved.</p>
        </div>
        </div>

      
      </motion.div>
    </footer>
  );
};

export default Footer;
