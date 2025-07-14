
import React from 'react';
import { Car, Camera, Mountain, Users, Shield, MapPin, Clock, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Transportation",
      description: "Comfortable vehicles with experienced drivers for all terrains and weather conditions.",
      features: ["Innova & Tempo Traveller", "Experienced Drivers", "Well-maintained Vehicles", "24/7 Support"]
    },
    {
      icon: Mountain,
      title: "Trekking & Adventure",
      description: "Professional guides for high-altitude treks and adventure activities in Ladakh.",
      features: ["Certified Guides", "Safety Equipment", "Route Planning", "Emergency Support"]
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Specialized photography expeditions to capture Ladakh's stunning landscapes.",
      features: ["Professional Photography Guide", "Best Locations", "Golden Hour Planning", "Technical Support"]
    },
    {
      icon: Users,
      title: "Group Tours",
      description: "Customized group packages for families, friends, and corporate teams.",
      features: ["Flexible Group Sizes", "Custom Itineraries", "Group Discounts", "Dedicated Guide"]
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance coverage for peace of mind during your journey.",
      features: ["Medical Coverage", "Trip Cancellation", "Emergency Evacuation", "24/7 Assistance"]
    },
    {
      icon: MapPin,
      title: "Local Experiences",
      description: "Authentic cultural experiences with local communities and traditional activities.",
      features: ["Homestay Options", "Cultural Shows", "Local Cuisine", "Traditional Crafts"]
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance and support throughout your Ladakh journey.",
      features: ["Emergency Helpline", "Local Assistance", "Real-time Updates", "Problem Resolution"]
    },
    {
      icon: Heart,
      title: "Wellness Tours",
      description: "Spiritual and wellness journeys including meditation and yoga retreats.",
      features: ["Meditation Sessions", "Yoga Classes", "Spiritual Guidance", "Peaceful Locations"]
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
            Our Services
          </h1>
          <p className="text-xl text-stone-200">
            Comprehensive travel solutions for your Ladakh adventure
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-800 mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              From transportation and accommodation to guided tours and adventure activities, 
              we provide everything you need for an unforgettable Ladakh experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-6">
                  <div className="bg-stone-100 p-3 rounded-lg mr-4">
                    <service.icon className="h-8 w-8 text-stone-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-stone-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-stone-600">
                      <div className="w-2 h-2 bg-stone-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-800 mb-6">
              Why Choose Leh Wanderer
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Our commitment to excellence and deep knowledge of Ladakh makes us 
              the perfect partner for your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-stone-700" />
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">Safety First</h3>
              <p className="text-stone-600">
                Your safety is our top priority. We follow strict safety protocols 
                and have emergency procedures in place.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-stone-700" />
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">Local Expertise</h3>
              <p className="text-stone-600">
                Our team consists of local experts who know every corner of Ladakh 
                and can share authentic insights.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-stone-700" />
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-3">Personalized Care</h3>
              <p className="text-stone-600">
                Every traveler is unique. We customize our services to match 
                your interests, budget, and travel style.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
