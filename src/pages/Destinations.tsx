
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Destinations = () => {
  const destinations = [
    {
      name: "Leh Palace",
      region: "CENTRAL LEH",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Former royal palace overlooking the town of Leh, offering panoramic views of the Indus Valley."
    },
    {
      name: "Nubra Valley",
      region: "NORTH LADAKH",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Desert valley with sand dunes, double-humped camels, and ancient monasteries."
    },
    {
      name: "Pangong Lake",
      region: "EAST LADAKH",
      image: "https://images.unsplash.com/photo-1586339277861-b0b895343ba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "High-altitude lake stretching across India and China, famous for its changing colors."
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-stone-700 to-amber-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">
            Destinations
          </h1>
          <p className="text-xl text-stone-200">
            Explore the breathtaking landscapes of Ladakh
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-stone-50 transition-colors">
              <ArrowLeft className="h-6 w-6 text-stone-600" />
            </button>
            
            <div className="grid md:grid-cols-3 gap-8 px-12">
              {destinations.map((destination, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-6">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs tracking-widest text-stone-700">
                      {destination.region}
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl text-stone-800 mb-3 group-hover:text-amber-700 transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {destination.description}
                  </p>
                </div>
              ))}
            </div>

            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-stone-50 transition-colors">
              <ArrowRight className="h-6 w-6 text-stone-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Regions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-800 mb-6">
              Regions of Ladakh
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              From ancient monasteries perched on clifftops to pristine high-altitude lakes, 
              each region offers unique experiences and breathtaking landscapes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Central Ladakh", "Nubra Valley", "Changthang", "Zanskar"].map((region, index) => (
              <div key={index} className="text-center p-6 hover:bg-stone-50 transition-colors rounded-lg">
                <h3 className="font-serif text-xl text-stone-800 mb-2">{region}</h3>
                <p className="text-stone-600 text-sm">
                  Discover the unique character and hidden treasures of {region}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
