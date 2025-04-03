
import { Clock } from "lucide-react";

const scheduleData = [
  { day: "Segunda", classes: [
    { time: "07:00 - 08:30", level: "Todos os níveis" },
    { time: "12:00 - 13:30", level: "Todos os níveis" },
    { time: "19:00 - 20:30", level: "Iniciantes" },
    { time: "20:30 - 22:00", level: "Avançado" }
  ]},
  { day: "Terça", classes: [
    { time: "07:00 - 08:30", level: "Todos os níveis" },
    { time: "12:00 - 13:30", level: "Todos os níveis" },
    { time: "19:00 - 20:30", level: "Iniciantes" },
    { time: "20:30 - 22:00", level: "Avançado" }
  ]},
  { day: "Quarta", classes: [
    { time: "07:00 - 08:30", level: "Todos os níveis" },
    { time: "12:00 - 13:30", level: "Todos os níveis" },
    { time: "19:00 - 20:30", level: "Iniciantes" },
    { time: "20:30 - 22:00", level: "Avançado" }
  ]},
  { day: "Quinta", classes: [
    { time: "07:00 - 08:30", level: "Todos os níveis" },
    { time: "12:00 - 13:30", level: "Todos os níveis" },
    { time: "19:00 - 20:30", level: "Iniciantes" },
    { time: "20:30 - 22:00", level: "Avançado" }
  ]},
  { day: "Sexta", classes: [
    { time: "07:00 - 08:30", level: "Todos os níveis" },
    { time: "12:00 - 13:30", level: "Todos os níveis" },
    { time: "19:00 - 20:30", level: "Treino livre/Sparring" }
  ]},
  { day: "Sábado", classes: [
    { time: "10:00 - 12:00", level: "Todos os níveis" }
  ]},
];

const ScheduleSection = () => {
  return (
    <section id="horarios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Horários de Aulas
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Oferecemos horários flexíveis para atender a diferentes rotinas. Encontre o melhor horário para você.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scheduleData.map((day, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">
                {day.day}
              </h3>
              
              {day.classes.length > 0 ? (
                <ul className="space-y-3">
                  {day.classes.map((classItem, classIndex) => (
                    <li key={classIndex} className="flex items-start">
                      <Clock className="w-5 h-5 text-red-600 mt-0.5 mr-2" />
                      <div>
                        <span className="font-medium">{classItem.time}</span>
                        <p className="text-sm text-gray-600">{classItem.level}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 italic">Academia fechada</p>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-100 p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">Turmas Especiais</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-600 mr-3"></div>
              <p><span className="font-medium">Kids (6-12 anos):</span> Terças e Quintas, 18:00 - 19:00</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-600 mr-3"></div>
              <p><span className="font-medium">Mulheres:</span> Segundas e Quartas, 18:00 - 19:00</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-600 mr-3"></div>
              <p><span className="font-medium">Treino Competitivo:</span> Sábados, 13:00 - 15:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
