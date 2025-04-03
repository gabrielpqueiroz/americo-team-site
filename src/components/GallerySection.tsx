
const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1617196701537-7329482cc9fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJyYXppbGlhbiUyMGppdSUyMGppdHN1fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    alt: "Treino de jiu-jitsu na Américo Team"
  },
  {
    url: "https://images.unsplash.com/photo-1615118265620-d8decf628275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyYXppbGlhbiUyMGppdSUyMGppdHN1fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    alt: "Competidor da Américo Team"
  },
  {
    url: "https://images.unsplash.com/photo-1618518532659-f61f9dbb8db6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aml1JTIwaml0c3V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    alt: "Treino técnico de BJJ"
  },
  {
    url: "https://images.unsplash.com/photo-1601588462477-e76b16de79f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1hcnRpYWwlMjBhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    alt: "Alunos da Américo Team em treino"
  },
  {
    url: "https://images.unsplash.com/photo-1574144113084-b6f450cc5e0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fG1hcnRpYWwlMjBhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    alt: "Aquecimento na academia Américo Team"
  },
  {
    url: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1hcnRpYWwlMjBhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    alt: "Aula de Jiu-Jitsu na Américo Team"
  }
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa Academia
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Conheça nosso espaço e ambiente de treino através dessas imagens.
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
