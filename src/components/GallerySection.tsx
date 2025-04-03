
const galleryImages = [
  {
    url: "/lovable-uploads/d1a5490b-ec4a-4310-b0b8-d6fcb303238a.png",
    alt: "Conquistas de alunos em competição com Professor Américo"
  },
  {
    url: "/lovable-uploads/3339aa3c-feb4-4b64-bf98-1f1e6e495e14.png",
    alt: "Professor Américo com Kimono"
  },
  {
    url: "/lovable-uploads/496f3176-5dd5-4101-b2ee-9b065236e951.png",
    alt: "Oficina de defesa pessoal feminina pela Américo Team na Itaipu"
  },
  {
    url: "/lovable-uploads/c8f84b65-b470-4363-bcbf-0583a06e5a4e.png",
    alt: "Treino na Américo Team BJJ"
  },
  {
    url: "/lovable-uploads/29b73f95-154d-47ec-b5a2-53f8730e28d6.png",
    alt: "Alunos em treinamento"
  },
  {
    url: "/lovable-uploads/6bd3e83c-c319-44be-b364-85681c909ec1.png",
    alt: "Evento de graduação na Américo Team"
  }
];

const GallerySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Nossa Academia
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Conheça nossa equipe e o ambiente de treino através dessas imagens.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-red transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700"
            >
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-300">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/americoteambjj/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-md transition-colors duration-300 shadow-lg transform hover:scale-105"
          >
            <span>Veja mais no nosso Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
