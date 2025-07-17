import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface SlideData {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  link: string;
}

const MissionCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideData[] = [
    {
      title: "Leh Ladakh Classic",
      description: "Experience the heart of Ladakh with visits to ancient monasteries, pristine lakes, and the vibrant markets of Leh. This 7-day journey covers Pangong Tso, Nubra Valley, and the iconic Magnetic Hill, perfect for first-time visitors seeking authentic cultural immersion.",
      buttonText: "View Itinerary",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/itineraries"
    },
    {
      title: "High Altitude Adventure",
      description: "For thrill-seekers and adventure enthusiasts, this 10-day expedition takes you through challenging mountain passes, remote villages, and breathtaking landscapes. Include trekking in Markha Valley and camping under the star-studded Ladakhi sky.",
      buttonText: "Explore Adventure",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/itineraries"
    },
    {
      title: "Cultural Heritage Tour",
      description: "Immerse yourself in Ladakh's rich Buddhist heritage with visits to Hemis, Thiksey, and Diskit monasteries. This 8-day spiritual journey includes meditation sessions, traditional festivals, and interactions with local monks and artisans.",
      buttonText: "Discover Culture",
      image: "https://images.unsplash.com/photo-1626525095417-abd6b6c2a79c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/itineraries"
    },
    {
      title: "Photography Expedition",
      description: "Capture the ethereal beauty of Ladakh through your lens with our specially designed photography tour. From golden hour shots at Shanti Stupa to wildlife photography in Hemis National Park, create memories that last a lifetime.",
      buttonText: "Book Photography Tour",
      image: "https://images.unsplash.com/photo-1571769929402-4079bfe2c470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/itineraries"
    },
    {
      title: "Winter Wonderland",
      description: "Experience Ladakh's mystical winter beauty with our exclusive Chadar Trek and winter festivals tour. Walk on the frozen Zanskar River, witness snow-covered monasteries, and participate in traditional winter celebrations with local communities.",
      buttonText: "Winter Experience",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/itineraries"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-stone-900 text-white overflow-hidden">
      <div className="relative min-h-[600px] flex items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 transform translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 transform -translate-x-full' 
                  : 'opacity-0 transform translate-x-full'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8 animate-fade-in">
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>
                  <button 
                    onClick={() => window.location.href = slide.link}
                    className="inline-flex items-center bg-white text-stone-900 px-8 py-4 font-medium tracking-widest hover:bg-stone-100 transition-all duration-300 hover-scale"
                  >
                    {slide.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                {/* Image */}
                <div className="relative animate-fade-in">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover hover-scale transition-transform duration-700"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-stone-400 opacity-30"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-stone-400 opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default MissionCarousel;