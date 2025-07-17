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
      title: "Our Mission, Our Land, Our Voice",
      description: "The Frozen Himalayas is a pioneering travel initiative founded by local experts, an award-winning Indigenous adventure company. Based in one of the world's most ecologically rich but remote regions, we are dedicated to nurturing local storytellers who intimately understand Ladakh's landscapes, wildlife, and culture.",
      buttonText: "Learn More",
      image: "/lovable-uploads/d6ce8f93-0e62-48de-9d3b-a95b5a2add02.png",
      link: "/about"
    },
    {
      title: "Sustainable Adventure, Authentic Culture",
      description: "Ladakh is home to rare experiences like ancient monasteries, high-altitude desert landscapes, and the warmth of local communities. But few of these stories are told by those who live here. We are changing that by empowering local guides to become the guardians and narrators of their homeland.",
      buttonText: "Explore",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/destinations"
    },
    {
      title: "Adventures Beyond Boundaries",
      description: "From the snow-capped peaks of the Himalayas to the serene monasteries echoing with ancient chants, every journey with us is a step into the soul of Ladakh. We create experiences that transform travelers into storytellers of this magnificent land.",
      buttonText: "Start Journey",
      image: "https://images.unsplash.com/photo-1626525095417-abd6b6c2a79c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "/contact"
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