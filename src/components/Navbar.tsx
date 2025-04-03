
import { useState } from "react";
import { Menu, X, Instagram, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/lovable-uploads/ac8eb216-a021-4472-a22e-122b085683ba.png" alt="Américo Team Logo" className="h-16" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="hover:text-red-600 transition-colors duration-300">Início</a>
            <a href="#sobre" className="hover:text-red-600 transition-colors duration-300">Sobre</a>
            <a href="#beneficios" className="hover:text-red-600 transition-colors duration-300">Benefícios</a>
            <a href="#horarios" className="hover:text-red-600 transition-colors duration-300">Horários</a>
            <a href="#contato" className="hover:text-red-600 transition-colors duration-300">Contato</a>
            <div className="flex items-center space-x-2">
              <a 
                href="https://www.instagram.com/americoteambjj/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/+5500000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors duration-300"
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col justify-center items-center transition-all duration-300 md:hidden",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col items-center space-y-6 text-xl">
          <a href="#inicio" onClick={toggleMenu} className="hover:text-red-600 transition-colors duration-300">Início</a>
          <a href="#sobre" onClick={toggleMenu} className="hover:text-red-600 transition-colors duration-300">Sobre</a>
          <a href="#beneficios" onClick={toggleMenu} className="hover:text-red-600 transition-colors duration-300">Benefícios</a>
          <a href="#horarios" onClick={toggleMenu} className="hover:text-red-600 transition-colors duration-300">Horários</a>
          <a href="#contato" onClick={toggleMenu} className="hover:text-red-600 transition-colors duration-300">Contato</a>
          <div className="flex items-center space-x-4 mt-4">
            <a 
              href="https://www.instagram.com/americoteambjj/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://wa.me/+5500000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors duration-300"
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
