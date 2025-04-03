
import { Shield, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://rrlaserfoz.b-cdn.net/638848d6-cecb-4a21-a3e8-880306144d8a.JPG" 
              alt="Treino na Américo Team BJJ" 
              className="w-full h-auto rounded-lg shadow-xl transform hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Quem Somos
            </h2>
            
            <p className="text-gray-800 mb-6">
              A <span className="font-bold">Américo Team</span> é uma academia de Brazilian Jiu-Jitsu fundada e liderada pelo Mestre Américo, faixa preta com mais de 15 anos de experiência no ensino desta arte marcial.
            </p>
            
            <p className="text-gray-800 mb-6">
              Nossa missão é proporcionar um ambiente de treinamento de alta qualidade, onde pessoas de todas as idades e níveis de habilidade possam aprender, praticar e evoluir no Jiu-Jitsu brasileiro.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-3 rounded-full mb-4 shadow-red">
                  <Shield className="text-white w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Defesa Pessoal</h3>
                <p className="text-gray-700">Técnicas eficazes para defesa em situações reais</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-3 rounded-full mb-4 shadow-red">
                  <Award className="text-white w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Competição</h3>
                <p className="text-gray-700">Treinamento para atletas que desejam competir</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-3 rounded-full mb-4 shadow-red">
                  <Users className="text-white w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Comunidade</h3>
                <p className="text-gray-700">Ambiente acolhedor e família unida</p>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-lg border border-gray-300">
              <p className="font-medium text-gray-700 mb-1">PROF. FILIADO CBJJ/IBJJF MATR. 517406</p>
              <p className="font-medium text-gray-700 mb-1">INSTRUTOR DE DEFESA PESSOAL CREDENCIADO POLÍCIA FEDERAL</p>
              <p className="font-medium text-gray-700">AMBIENTE CLIMATIZADO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
