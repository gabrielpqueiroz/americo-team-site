import { useState, useEffect } from "react";
import { Menu, X, Instagram, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300 bg-black`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="https://rrlaserfoz.b-cdn.net/americo%20team%20fundo%20transparente%20new.png" 
              alt="Américo Team Logo" 
              className="h-16 object-contain" 
            />
          </div>

          <div className="hidden md:flex items-center space-x-8 text-white">
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
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=5545999774040&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={cn(
        "fixed top-0 left-0 right-0 bg-black bg-opacity-95 py-4 px-4 transition-all duration-300 md:hidden shadow-lg",
        isMenuOpen ? "h-auto opacity-100" : "h-0 opacity-0 pointer-events-none"
      )}>
        <div className="flex justify-between items-center mb-6">
          <img 
            src="https://rrlaserfoz.b-cdn.net/americo%20team%20fundo%20transparente%20new.png" 
            alt="Américo Team Logo" 
            className="h-12 object-contain" 
          />
          <button
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col items-center space-y-4 text-lg text-white">
          <a href="#inicio" onClick={toggleMenu} className="hover:text-red-600 transition-colors duration-300">Início</a>
          <a href="#sobre" onClick={toggleMenu} className="hover:text-red-600 transition-colors duration-300">Sobre</a>
          <a href="#beneficios" onClick={toggleMenu} className="hover:text-red-600 transition-colors duration-300">Benefícios</a>
          <a href="#horarios" onClick={toggleMenu} className="hover:text-red-600 transition-colors duration-300">Horários</a>
          <a href="#contato" onClick={toggleMenu} className="hover:text-red-600 transition-colors duration-300">Contato</a>
          <div className="flex items-center space-x-4 mt-2 pt-2 border-t border-gray-700 w-full justify-center">
            <a 
              href="https://www.instagram.com/americoteambjj/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors duration-300 p-2 text-white"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=5545999774040&text&type=phone_number&app_absent=0" 
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
