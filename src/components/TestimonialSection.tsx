
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Aluno há 1 ano", // Changed from "Aluno há 3 anos"
    content: "O Jiu-Jitsu na Américo Team mudou minha vida. Além de melhorar meu condicionamento físico, ganhei confiança e fiz amigos que considero parte da minha família.",
    stars: 5
  },
  {
    name: "Ana Oliveira",
    role: "Aluna há 1 ano",
    content: "Comecei no Jiu-Jitsu para aprender defesa pessoal e acabei me apaixonando pelo esporte. O ambiente é muito acolhedor para mulheres e o Mestre Américo é um excelente professor.",
    stars: 5
  },
  {
    name: "Miguel Santos",
    role: "Pai de aluno",
    content: "Meu filho de 9 anos treina na turma infantil e a transformação em seu comportamento foi incrível. Mais disciplinado, focado e com mais autoconfiança.",
    stars: 5
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Dizem Nossos Alunos
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Veja os depoimentos de pessoas que já transformaram suas vidas através do Jiu-Jitsu na Américo Team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md relative">
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
              
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
