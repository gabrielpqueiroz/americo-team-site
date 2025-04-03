
const galleryImages = [
  {
    url: "/lovable-uploads/d1a5490b-ec4a-4310-b0b8-d6fcb303238a.png",
    alt: "Equipe Américo Team reunida após treino"
  },
  {
    url: "/lovable-uploads/3339aa3c-feb4-4b64-bf98-1f1e6e495e14.png",
    alt: "Professor Américo em uniforma de treino"
  },
  {
    url: "/lovable-uploads/496f3176-5dd5-4101-b2ee-9b065236e951.png",
    alt: "Oficina de Defesa Pessoal Feminina na Américo Team"
  },
  {
    url: "/lovable-uploads/76b55fbe-275b-4512-aceb-b32165a51304.png",
    alt: "Equipe de competição com Professor Américo"
  },
  {
    url: "/lovable-uploads/db6ced10-829a-4b06-8f89-cfdbb29af3dc.png",
    alt: "Alunos graduados da Américo Team"
  },
  {
    url: "/lovable-uploads/008a50c2-6f24-416f-91e1-8575a5a5ae6a.png",
    alt: "Conquistas em competição com Professor Américo"
  }
];

const GallerySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa Academia
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Conheça nossa equipe e o ambiente de treino através dessas imagens.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://www.instagram.com/americoteambjj/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md transition-colors duration-300"
          >
            <span>Veja mais no nosso Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
