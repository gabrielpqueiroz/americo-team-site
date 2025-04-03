
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative pt-20 min-h-screen flex items-center bg-black text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJyYXppbGlhbiUyMGppdSUyMGppdHN1fGVufDB8fDB8fHww&auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-4 py-16 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-red-600">AMÉRICO TEAM</span> BRAZILIAN JIU-JITSU
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Transforme sua vida através do Jiu-Jitsu. Desenvolva disciplina, força e autoconfiança com o Mestre Américo em Foz do Iguaçu.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://wa.me/+5500000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md flex items-center justify-center space-x-2 transition-colors duration-300 text-lg font-semibold"
            >
              <span>Agende sua aula experimental</span>
              <ArrowRight size={20} />
            </a>
            <a 
              href="#sobre" 
              className="border-2 border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-md flex items-center justify-center transition-colors duration-300 text-lg font-semibold"
            >
              Conheça a academia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
