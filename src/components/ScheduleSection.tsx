
import { Clock, Banknote } from "lucide-react";

const scheduleData = [
  { 
    day: "Segunda-feira", 
    classes: [{ time: "19:00 - 20:30", level: "Todos os níveis" }]
  },
  { 
    day: "Terça-feira", 
    classes: []
  },
  { 
    day: "Quarta-feira", 
    classes: [{ time: "19:00 - 20:30", level: "Todos os níveis" }]
  },
  { 
    day: "Quinta-feira", 
    classes: []
  },
  { 
    day: "Sexta-feira", 
    classes: []
  },
  { 
    day: "Sábado", 
    classes: [{ time: "17:00 - 18:30", level: "Todos os níveis" }]
  },
  { 
    day: "Domingo", 
    classes: []
  }
];

const investmentPlans = [
  {
    name: "Mensal",
    price: "R$150",
    description: "Pagamento mensal"
  },
  {
    name: "Semestral",
    price: "R$800",
    description: "Economia de R$100 em 6 meses"
  },
  {
    name: "Anual",
    price: "R$1.500",
    description: "Economia de R$300 em 12 meses"
  }
];

const ScheduleSection = () => {
  return (
    <section id="horarios" className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Horários de Aulas
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Oferecemos horários flexíveis para atender a diferentes rotinas. Encontre o melhor horário para você.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {scheduleData.filter(day => day.classes.length > 0).map((day, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2 text-gray-800">
                {day.day}
              </h3>
              
              {day.classes.length > 0 ? (
                <ul className="space-y-3">
                  {day.classes.map((classItem, classIndex) => (
                    <li key={classIndex} className="flex items-start">
                      <Clock className="w-5 h-5 text-red-600 mt-0.5 mr-2" />
                      <div>
                        <span className="font-medium text-gray-800">{classItem.time}</span>
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
        
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Investimento
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {investmentPlans.map((plan, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02]"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">{plan.name}</h3>
                <div className="flex items-center mb-4">
                  <Banknote className="w-6 h-6 text-green-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg max-w-3xl mx-auto border border-red-200 shadow-md">
            <p className="text-center text-gray-800 font-medium mb-2">
              Parcelamento disponível em até 12x com acréscimo da máquina.
            </p>
            <div className="mt-4">
              <p className="text-gray-700 text-center">
                <span className="font-semibold">CNPJ:</span> 44.035.330-0001/98
              </p>
              <p className="text-gray-700 text-center">
                <span className="font-semibold">Endereço:</span> Rua Tibagi 1475, Campos do Iguaçu, Foz do Iguaçu - 85857000
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <a 
            href="https://www.instagram.com/americoteambjj/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-md hover:from-purple-700 hover:to-pink-700 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram
          </a>
          
          <a 
            href="https://www.facebook.com/profile.php?id=61551355636985&mibextid=LQQJ4d" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-md hover:from-blue-700 hover:to-blue-800 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            Facebook
          </a>
          
          <a 
            href="https://api.whatsapp.com/send/?phone=5545999774040&text&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-md hover:from-green-700 hover:to-green-800 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
