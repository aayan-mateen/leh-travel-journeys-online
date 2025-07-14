
import React from 'react';
import { Award, Users, Globe, Heart, Mail, Phone } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "500+", label: "Happy travelers" },
    { number: "15+", label: "Years of experience" },
    { number: "50+", label: "Destinations covered" },
    { number: "4.9", label: "Average rating" }
  ];

  const team = [
    {
      name: "Gulzar Ahmed",
      role: "Founder & Guide",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Born and raised in Leh, Gulzar has been guiding travelers for over 15 years.",
      email: "gulzar@lehwanderer.com",
      phone: "+91 94180 12345"
    },
    {
      name: "Imran Khan",
      role: "Adventure Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "High-altitude trekking expert with extensive knowledge of Ladakh's remote regions.",
      email: "imran@lehwanderer.com",
      phone: "+91 94180 67890"
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
            About Us
          </h1>
          <p className="text-xl text-stone-200">
            Your trusted companions in exploring Ladakh
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Founded in the heart of Leh by local travel enthusiasts, Leh Wanderer was born 
              from a passion to share the incredible beauty and rich culture of Ladakh with 
              the world. We believe that travel should be transformative, connecting you not 
              just with places, but with people, traditions, and experiences that leave lasting impressions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ladakh landscape"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Heart className="h-6 w-6 text-stone-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-2">Authentic Experiences</h3>
                  <p className="text-stone-600">We create genuine connections between travelers and local communities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="h-6 w-6 text-stone-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-2">Sustainable Tourism</h3>
                  <p className="text-stone-600">Our practices support local communities and preserve the environment.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-6 w-6 text-stone-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-2">Expert Knowledge</h3>
                  <p className="text-stone-600">Local expertise ensures you discover hidden gems and cultural insights.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="font-serif text-4xl text-stone-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-stone-600 tracking-widest uppercase text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-stone-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Our passionate team of local experts brings decades of combined experience 
              in guiding travelers through the wonders of Ladakh.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-stone-50 rounded-lg p-8">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="font-serif text-2xl text-stone-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-stone-600 mb-4 tracking-widest uppercase text-sm">
                  {member.role}
                </p>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center text-stone-600">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${member.email}`} className="hover:text-stone-800 transition-colors">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center text-stone-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <a href={`tel:${member.phone}`} className="hover:text-stone-800 transition-colors">
                      {member.phone}
                    </a>
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

export default About;
