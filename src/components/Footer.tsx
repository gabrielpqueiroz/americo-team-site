
import { Instagram, Facebook, Mail, MapPin, Phone, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Américo Team BJJ</h3>
            <p className="mb-4">Academia de Brazilian Jiu-Jitsu em Foz do Iguaçu, liderada pelo Mestre Américo, faixa preta.</p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/americoteambjj/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/americoteambjj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=5545999774040&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Rua Tibagi 1475, Campos do Iguaçu, Foz do Iguaçu - 85857000</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>(45) 99977-4040</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>contato@americoteam.com.br</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Horários</h3>
            <div className="space-y-2">
              <p>Segunda e Quarta: 19h às 20h30</p>
              <p>Sábado: 17h às 18h30</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Américo Team BJJ. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
