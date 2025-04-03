
import { Brain, Heart, Shield, Dumbbell, Trophy, UserPlus, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: <Shield className="w-8 h-8 text-red-600" />,
    title: "Defesa Pessoal",
    description: "Aprenda técnicas eficazes para se defender em situações reais, desenvolvendo confiança e segurança no dia a dia."
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-red-600" />,
    title: "Condicionamento Físico",
    description: "Desenvolva força, resistência, flexibilidade e coordenação motora através de treinos completos e dinâmicos."
  },
  {
    icon: <Brain className="w-8 h-8 text-red-600" />,
    title: "Desenvolvimento Mental",
    description: "Fortaleça sua mente com disciplina, foco, estratégia e resiliência, habilidades aplicáveis em todos os aspectos da vida."
  },
  {
    icon: <Heart className="w-8 h-8 text-red-600" />,
    title: "Saúde e Bem-estar",
    description: "Melhore sua qualidade de vida com redução do estresse, melhor qualidade de sono e aumento da disposição diária."
  },
  {
    icon: <Trophy className="w-8 h-8 text-red-600" />,
    title: "Superação de Limites",
    description: "Descubra seu potencial, supere desafios e desenvolva autoconfiança através da progressão constante."
  },
  {
    icon: <UserPlus className="w-8 h-8 text-red-600" />,
    title: "Conexões Sociais",
    description: "Faça parte de uma comunidade unida, criando amizades duradouras e uma rede de apoio positiva."
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefícios do Jiu-Jitsu
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            O Brazilian Jiu-Jitsu vai muito além de uma arte marcial. Descubra como a prática pode transformar sua vida de diversas maneiras.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://api.whatsapp.com/send/?phone=5545999774040&text&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors duration-300 text-lg font-semibold"
          >
            <span>Comece sua jornada hoje</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
