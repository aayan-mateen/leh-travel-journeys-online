
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Star className="h-8 w-8 text-stone-600" />,
      title: "Exclusive Access",
      description: "Our journeys are defined by personalized experiences that celebrate the precious heritage and cultural traditions of Ladakh. Each moment is carefully designed to provide authentic insight."
    },
    {
      icon: <Users className="h-8 w-8 text-stone-600" />,
      title: "Local Experts",
      description: "Our team is composed of seasoned local guides with extensive knowledge of Leh and its hidden gems. We craft compelling, seamless journeys tailored exclusively for you."
    },
    {
      icon: <Award className="h-8 w-8 text-stone-600" />,
      title: "Tailored Expeditions",
      description: "Every itinerary is made from scratch, tailored to your particular interests and preferences. From monasteries to mountain passes, we provide 24-hour assistance every step of the journey."
    }
  ];

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-stone-800 via-stone-700 to-stone-600">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
            Journeys to transcend
            <br />
            <span className="text-stone-200">boundaries</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-200 max-w-2xl mx-auto">
            Discover the mystical beauty of Ladakh through carefully curated experiences
          </p>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">
              Travel Destinations
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-8">
              Tailor-made journeys that bring back purpose and value to travel through immersive, cultural experiences.
            </p>
            <Link
              to="/destinations"
              className="inline-block bg-stone-800 text-white px-8 py-3 text-sm tracking-widest hover:bg-stone-700 transition-colors duration-300"
            >
              EXPLORE OUR DESTINATIONS
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">
              Curated Travel Experiences
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Seamlessly designed by travel experts with your interests and preferences in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-2xl text-stone-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-stone-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-stone-300 mb-8">
            Let us craft the perfect Ladakh experience tailored just for you
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-stone-600 text-white px-8 py-4 text-sm tracking-widest hover:bg-stone-700 transition-colors duration-300"
          >
            PLAN YOUR ADVENTURE
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
