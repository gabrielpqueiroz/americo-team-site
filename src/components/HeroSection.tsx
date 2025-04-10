
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://rrlaserfoz.b-cdn.net/610f940f-aaa5-4a8b-a57d-1bdeec3a7e6a.JPG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white"> {/* Changed from font-bold to font-extrabold */}
          AMÉRICO TEAM BJJ
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-16 max-w-xl">
          Transforme sua vida através do Jiu-Jitsu
        </p>
        
        <div className={`${isMobile ? 'w-full' : 'w-auto'} mt-auto`}>
          <a 
            href="https://api.whatsapp.com/send/?phone=5545999774040&text&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${isMobile ? 'w-full' : 'w-auto'} bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-md flex items-center justify-center space-x-2 transition-all duration-300 text-lg font-semibold shadow-red transform hover:scale-105`}
          >
            <span>Agende sua aula experimental</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
      
      {/* Modern animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
