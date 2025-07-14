
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, MapPin } from 'lucide-react';

const Itineraries = () => {
  const itineraries = [
    {
      id: 1,
      title: "Classic Leh Ladakh",
      duration: "7 Days",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Leh Palace", "Thiksey Monastery", "Pangong Lake", "Nubra Valley"],
      description: "Perfect introduction to Ladakh covering major attractions and cultural sites."
    },
    {
      id: 2,
      title: "Adventure Seeker",
      duration: "10 Days",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Khardung La Pass", "River Rafting", "Trekking", "Camping"],
      description: "Thrilling adventure package with high-altitude passes and outdoor activities."
    },
    {
      id: 3,
      title: "Spiritual Journey",
      duration: "12 Days",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1586339277861-b0b895343ba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Hemis Monastery", "Meditation Sessions", "Prayer Wheels", "Local Ceremonies"],
      description: "Deep dive into Buddhist culture and spirituality of Ladakh."
    },
    {
      id: 4,
      title: "Luxury Ladakh Experience",
      duration: "8 Days",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Luxury Camps", "Private Guide", "Gourmet Meals", "Helicopter Ride"],
      description: "Experience Ladakh in ultimate luxury with premium accommodations and exclusive experiences."
    },
    {
      id: 5,
      title: "Photography Expedition",
      duration: "9 Days",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Golden Hour Shoots", "Wildlife Photography", "Landscape Focus", "Expert Guide"],
      description: "Capture the breathtaking beauty of Ladakh with professional photography guidance."
    },
    {
      id: 6,
      title: "Family Explorer",
      duration: "6 Days",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Family-Friendly Activities", "Cultural Shows", "Easy Treks", "Local Markets"],
      description: "Perfect family package with activities suitable for all ages and comfortable accommodations."
    },
    {
      id: 7,
      title: "Bike Tour Expedition",
      duration: "14 Days",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Royal Enfield", "High Passes", "Remote Villages", "Support Vehicle"],
      description: "Epic motorcycle journey through the highest motorable roads in the world."
    },
    {
      id: 8,
      title: "Trekking Adventure",
      duration: "11 Days",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Markha Valley Trek", "Stok Kangri Base Camp", "Alpine Lakes", "Mountain Guides"],
      description: "Multi-day trekking adventure through pristine valleys and high-altitude landscapes."
    },
    {
      id: 9,
      title: "Winter Wonderland",
      duration: "5 Days",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1591123120675-6f7686473c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Frozen Waterfalls", "Snow Leopard Spotting", "Winter Festivals", "Warm Clothing"],
      description: "Experience the magical winter beauty of Ladakh with snow-covered landscapes."
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-stone-800 to-stone-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">
            Curated Itineraries
          </h1>
          <p className="text-xl text-stone-200">
            Handcrafted journeys through the Land of High Passes
          </p>
        </div>
      </section>

      {/* Itineraries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-800 mb-6">
              Choose Your Adventure
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Each itinerary is carefully crafted to showcase the best of Ladakh, 
              from cultural immersion to adventure activities and spiritual experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {itineraries.map((itinerary, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={itinerary.image}
                    alt={itinerary.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{itinerary.rating}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-stone-800 mb-4">
                    {itinerary.title}
                  </h3>
                  <p className="text-stone-600 mb-6">
                    {itinerary.description}
                  </p>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex items-center text-stone-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{itinerary.duration}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-stone-800 mb-3">Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {itinerary.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-stone-600">
                          <MapPin className="h-3 w-3 mr-2 text-stone-600" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to={`/itinerary/${itinerary.id}`}
                    className="block w-full bg-stone-800 text-white py-3 text-sm tracking-widest hover:bg-stone-700 transition-colors duration-300 text-center"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Itinerary Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-serif text-4xl text-stone-800 mb-6">
            Create Your Custom Journey
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            Don't see exactly what you're looking for? Let us create a completely 
            personalized itinerary based on your interests, budget, and travel dates.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-stone-600 text-white px-8 py-4 text-sm tracking-widest hover:bg-stone-700 transition-colors duration-300"
          >
            PLAN CUSTOM TRIP
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Itineraries;
