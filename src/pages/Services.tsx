
import React from 'react';
import { Car, Camera, Mountain, Users, Shield, MapPin, Clock, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Transportation",
      description: "Comfortable vehicles with experienced drivers for all terrains and weather conditions.",
      features: ["Innova & Tempo Traveller", "Experienced Drivers", "Well-maintained Vehicles", "24/7 Support"],
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Mountain,
      title: "Trekking & Adventure",
      description: "Professional guides for high-altitude treks and adventure activities in Ladakh.",
      features: ["Certified Guides", "Safety Equipment", "Route Planning", "Emergency Support"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Specialized photography expeditions to capture Ladakh's stunning landscapes.",
      features: ["Professional Photography Guide", "Best Locations", "Golden Hour Planning", "Technical Support"],
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Users,
      title: "Group Tours",
      description: "Customized group packages for families, friends, and corporate teams.",
      features: ["Flexible Group Sizes", "Custom Itineraries", "Group Discounts", "Dedicated Guide"],
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Shield,
      title: "Cultural Experiences",
      description: "Authentic cultural experiences with local communities and traditional activities.",
      features: ["Homestay Options", "Cultural Shows", "Local Cuisine", "Traditional Crafts"],
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Heart,
      title: "Wellness Tours",
      description: "Spiritual and wellness journeys including meditation and yoga retreats.",
      features: ["Meditation Sessions", "Yoga Classes", "Spiritual Guidance", "Peaceful Locations"],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen overflow-hidden">
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
            Our Services
          </h1>
          <p className="text-xl text-stone-200">
            Comprehensive travel solutions for your Ladakh adventure
          </p>
        </div>
      </section>

      {/* Services with Scattered Photos Layout */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Transportation Service */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={services[0].image} 
                    alt="Transportation"
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-6 rounded-lg shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Car className="h-12 w-12 text-stone-700 mb-2" />
                  <h3 className="font-serif text-lg text-stone-800">Safe & Reliable</h3>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="font-serif text-4xl text-stone-800 mb-6">Transportation</h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                  Comfortable vehicles with experienced drivers for all terrains and weather conditions. 
                  Our fleet includes well-maintained Innovas and Tempo Travellers perfect for Ladakh's challenging roads.
                </p>
                <div className="space-y-2">
                  {services[0].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-stone-600">
                      <div className="w-2 h-2 bg-stone-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trekking Service */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg order-2 lg:order-1">
                <h2 className="font-serif text-4xl text-stone-800 mb-6">Trekking & Adventure</h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                  Professional guides for high-altitude treks and adventure activities in Ladakh. 
                  Experience the breathtaking landscapes with our certified mountain guides.
                </p>
                <div className="space-y-2">
                  {services[1].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-stone-600">
                      <div className="w-2 h-2 bg-stone-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="bg-white p-8 rounded-lg shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={services[1].image} 
                    alt="Trekking"
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Mountain className="h-8 w-8 text-stone-700 mb-1" />
                  <span className="text-sm font-medium text-stone-800">High Altitude</span>
                </div>
              </div>
            </div>
          </div>

          {/* Photography Tours */}
          <div className="relative mb-32">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-stone-800 mb-6">Photography Expeditions</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Capture the raw beauty of Ladakh with our specialized photography guides who know 
                the perfect spots and timing for that once-in-a-lifetime shot.
              </p>
            </div>
            <div className="relative">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={services[2].image} 
                    alt="Photography"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Camera className="h-8 w-8 text-stone-700 mb-2" />
                  <h4 className="font-serif text-lg text-stone-800 mb-2">Golden Hour Magic</h4>
                  <p className="text-stone-600 text-sm">Perfect timing for sunrise and sunset shots</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-500 md:mt-8">
                  <img 
                    src={services[3].image} 
                    alt="Landscapes"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <MapPin className="h-8 w-8 text-stone-700 mb-2" />
                  <h4 className="font-serif text-lg text-stone-800 mb-2">Secret Locations</h4>
                  <p className="text-stone-600 text-sm">Hidden gems known only to locals</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={services[4].image} 
                    alt="Culture"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Users className="h-8 w-8 text-stone-700 mb-2" />
                  <h4 className="font-serif text-lg text-stone-800 mb-2">Cultural Stories</h4>
                  <p className="text-stone-600 text-sm">Document authentic local traditions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Wellness & Culture Section */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <Heart className="h-12 w-12 text-stone-700 mr-4" />
                    <div>
                      <h3 className="font-serif text-2xl text-stone-800">Wellness Retreats</h3>
                      <p className="text-stone-600">Find peace in the mountains</p>
                    </div>
                  </div>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    Spiritual and wellness journeys including meditation and yoga retreats. 
                    Experience inner peace surrounded by the majestic Himalayas.
                  </p>
                  <div className="space-y-2">
                    {services[5].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-stone-600 text-sm">
                        <div className="w-2 h-2 bg-stone-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -top-8 -right-8 transform rotate-12">
                  <div className="bg-white p-4 rounded-lg shadow-xl">
                    <img 
                      src={services[5].image} 
                      alt="Wellness"
                      className="w-32 h-24 object-cover rounded"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <Shield className="h-12 w-12 text-stone-700 mr-4" />
                    <div>
                      <h3 className="font-serif text-2xl text-stone-800">Cultural Immersion</h3>
                      <p className="text-stone-600">Live like a local</p>
                    </div>
                  </div>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    Authentic cultural experiences with local communities and traditional activities. 
                    Stay in homestays and experience the warm hospitality of Ladakhi families.
                  </p>
                  <div className="space-y-2">
                    {services[4].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-stone-600 text-sm">
                        <div className="w-2 h-2 bg-stone-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 transform -rotate-6">
                  <div className="bg-white p-4 rounded-lg shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                      alt="Culture"
                      className="w-28 h-20 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 transform rotate-12 opacity-20">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Clock className="h-8 w-8 text-stone-700" />
          </div>
        </div>
        <div className="absolute bottom-40 left-10 transform -rotate-6 opacity-20">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <MapPin className="h-8 w-8 text-stone-700" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-stone-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-32 h-24 bg-white rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-20 right-16 w-24 h-32 bg-white rounded-lg transform -rotate-6"></div>
          <div className="absolute top-32 right-32 w-20 h-20 bg-white rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl text-white mb-6">
            Ready for Your Ladakh Adventure?
          </h2>
          <p className="text-xl text-stone-200 mb-8">
            Let Frozen Himalayas craft the perfect journey for you. Every expedition tells a story, 
            and we're here to help you write yours.
          </p>
          <button className="bg-white text-stone-800 px-8 py-4 rounded-lg font-medium hover:bg-stone-100 transition-colors shadow-lg">
            Start Planning Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
