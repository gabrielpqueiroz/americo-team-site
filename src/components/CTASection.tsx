
import { ArrowRight, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section 
      id="contato" 
      className="py-20 bg-gradient-to-r from-black to-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/lovable-uploads/ac8eb216-a021-4472-a22e-122b085683ba.png" 
          alt="Américo Team Background" 
          className="w-full h-full object-contain opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Comece Sua Jornada no Jiu-Jitsu Hoje
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Agende uma aula experimental gratuita e descubra como o Jiu-Jitsu pode transformar sua vida.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://api.whatsapp.com/send/?phone=5545999774040&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md flex items-center justify-center space-x-3 transition-colors duration-300 text-lg font-semibold"
            >
              <MessageSquare size={20} />
              <span>Fale Conosco via WhatsApp</span>
              <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Por que escolher a Américo Team?</h3>
            <ul className="text-left space-y-2">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                <span>Instrutor faixa preta com mais de 10 anos de experiência</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                <span>Aulas para todos os níveis, do iniciante ao avançado</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                <span>Ambiente familiar e acolhedor para todos</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                <span>Localização central em Foz do Iguaçu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
