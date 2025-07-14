
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Pangong Lake",
      description: "Crystal clear waters reflecting the sky"
    },
    {
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Khardung La Pass",
      description: "World's highest motorable road"
    },
    {
      src: "https://images.unsplash.com/photo-1586339277861-b0b895343ba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Hemis Monastery",
      description: "Ancient Buddhist heritage"
    },
    {
      src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Nubra Valley",
      description: "Desert landscape in the mountains"
    },
    {
      src: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Tso Moriri Lake",
      description: "Pristine high-altitude lake"
    },
    {
      src: "https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Magnetic Hill",
      description: "Gravity-defying phenomenon"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Leh Palace",
      description: "Royal heritage of Ladakh"
    },
    {
      src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Markha Valley",
      description: "Trekker's paradise"
    },
    {
      src: "https://images.unsplash.com/photo-1591123120675-6f7686473c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Chadar Trek",
      description: "Frozen river expedition"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Sunrise in Ladakh",
      description: "Golden hour magic"
    },
    {
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Starry Night",
      description: "Clear mountain skies"
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Mountain Peaks",
      description: "Majestic Himalayan ranges"
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-stone-800 to-stone-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">
            Gallery
          </h1>
          <p className="text-xl text-stone-200">
            Captured moments from the Land of High Passes
          </p>
        </div>
      </section>

      {/* Carousel Gallery */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-800 mb-6">
              Photo Journey
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Experience the breathtaking beauty of Ladakh through our curated collection 
              of photographs capturing the essence of this mystical land.
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-serif text-lg text-stone-800 mb-2">
                          {image.title}
                        </h3>
                        <p className="text-sm text-stone-600">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-800 mb-6">
              Explore More
            </h2>
            <p className="text-lg text-stone-600">
              A glimpse into the diverse landscapes and experiences awaiting you in Ladakh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.slice(0, 8).map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-serif text-lg mb-1">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
