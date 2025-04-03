
import { Shield, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1625374929847-32d7018944a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJyYXppbGlhbiUyMGppdSUyMGppdHN1fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80" 
              alt="Mestre Américo ensinando Jiu-Jitsu" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
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
                <div className="bg-red-600 p-3 rounded-full mb-4">
                  <Shield className="text-white w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Defesa Pessoal</h3>
                <p className="text-gray-700">Técnicas eficazes para defesa em situações reais</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-red-600 p-3 rounded-full mb-4">
                  <Award className="text-white w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Competição</h3>
                <p className="text-gray-700">Treinamento para atletas que desejam competir</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-red-600 p-3 rounded-full mb-4">
                  <Users className="text-white w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Comunidade</h3>
                <p className="text-gray-700">Ambiente acolhedor e família unida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
