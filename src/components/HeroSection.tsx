
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative pt-20 min-h-screen flex items-center text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/b0656774-0cb0-4719-acb9-599557dbeb92.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20 pointer-events-none"></div>
      <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
        <div className="max-w-xl backdrop-blur-md bg-black/30 p-6 md:p-10 rounded-xl border border-red-500/20 shadow-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent animate-pulse-slow">
            AMÉRICO TEAM BJJ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Transforme sua vida através do Jiu-Jitsu. Desenvolva disciplina, força e autoconfiança em Foz do Iguaçu.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://api.whatsapp.com/send/?phone=5545999774040&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-md flex items-center justify-center space-x-2 transition-all duration-300 text-lg font-semibold shadow-red transform hover:scale-105"
            >
              <span>Agende sua aula experimental</span>
              <ArrowRight size={20} />
            </a>
            <a 
              href="#sobre" 
              className="bg-transparent border border-white/50 hover:bg-white/10 text-white px-6 py-3 rounded-md flex items-center justify-center transition-colors duration-300 text-lg font-semibold backdrop-blur-sm hover:border-red-500"
            >
              Conheça a academia
            </a>
          </div>
        </div>
      </div>
      
      {/* Modern animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-300 mb-2">Explore</span>
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
