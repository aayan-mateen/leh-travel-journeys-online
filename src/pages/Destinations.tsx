
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
    },
    {
      name: "Thiksey Monastery",
      region: "CENTRAL LADAKH",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Tibetan Buddhist monastery known for its resemblance to the Potala Palace in Lhasa."
    },
    {
      name: "Khardung La Pass",
      region: "NORTH LADAKH",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "One of the world's highest motorable passes at 18,380 feet above sea level."
    },
    {
      name: "Tso Moriri Lake",
      region: "CHANGTHANG",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "High-altitude lake in the Changthang plateau, surrounded by barren hills and snow-capped peaks."
    },
    {
      name: "Hemis Monastery",
      region: "CENTRAL LADAKH",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Largest and wealthiest monastery in Ladakh, famous for its annual Hemis festival."
    },
    {
      name: "Diskit Monastery",
      region: "NUBRA VALLEY",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Oldest and largest Buddhist monastery in Nubra Valley with a giant Buddha statue."
    },
    {
      name: "Lamayuru Monastery",
      region: "WEST LADAKH",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "One of the oldest monasteries in Ladakh, situated in a moonland-like landscape."
    },
    {
      name: "Zanskar Valley",
      region: "ZANSKAR",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Remote valley known for the frozen river trek and ancient Buddhist culture."
    },
    {
      name: "Shanti Stupa",
      region: "CENTRAL LEH",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "White-domed Buddhist stupa built by Japanese monks, offering panoramic views of Leh."
    },
    {
      name: "Magnetic Hill",
      region: "CENTRAL LADAKH",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Mysterious hill where vehicles appear to roll uphill against gravity due to optical illusion."
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-stone-700 to-stone-800">
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
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-800 mb-6">
              Discover Ladakh's Wonders
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              From ancient monasteries to pristine high-altitude lakes, each destination offers unique experiences and breathtaking landscapes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4 rounded-lg">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs tracking-widest text-stone-700 rounded">
                    {destination.region}
                  </div>
                </div>
                <h3 className="font-serif text-xl text-stone-800 mb-2 group-hover:text-stone-600 transition-colors">
                  {destination.name}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {destination.description}
                </p>
              </div>
            ))}
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
