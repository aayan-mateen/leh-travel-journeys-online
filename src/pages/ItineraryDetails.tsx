
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Star, MapPin, Camera, Calendar, CheckCircle, ArrowLeft } from 'lucide-react';

const ItineraryDetails = () => {
  const { id } = useParams();
  
  // Mock data - in a real app, you'd fetch this based on the ID
  const itinerary = {
    title: "Classic Leh Ladakh",
    duration: "7 Days",
    price: "₹45,000",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Perfect introduction to Ladakh covering major attractions and cultural sites. Experience the mystical beauty of the Land of High Passes through carefully curated experiences.",
    highlights: ["Leh Palace", "Thiksey Monastery", "Pangong Lake", "Nubra Valley"],
    included: [
      "Airport transfers",
      "7 nights accommodation",
      "All meals (breakfast, lunch, dinner)",
      "Professional guide",
      "Transportation in Innova/Tempo Traveller",
      "Inner line permits",
      "Sightseeing as per itinerary"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh",
        description: "Welcome to Leh! Rest and acclimatize to the high altitude. Evening orientation and welcome dinner.",
        activities: ["Airport pickup", "Hotel check-in", "Rest and acclimatization", "Welcome dinner"]
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        description: "Explore the historic town of Leh and its magnificent monasteries.",
        activities: ["Leh Palace", "Shanti Stupa", "Leh Market", "Thiksey Monastery"]
      },
      {
        day: 3,
        title: "Leh to Nubra Valley",
        description: "Cross the world's highest motorable pass - Khardung La (18,380 ft).",
        activities: ["Khardung La Pass", "Diskit Monastery", "Camel safari at Hunder", "Overnight in Nubra"]
      },
      {
        day: 4,
        title: "Nubra Valley to Pangong Lake",
        description: "Journey to the famous high-altitude lake that changes colors throughout the day.",
        activities: ["Early morning departure", "Scenic drive", "Pangong Lake arrival", "Photography session"]
      },
      {
        day: 5,
        title: "Pangong Lake to Leh",
        description: "Return journey to Leh via Chang La pass with stops at scenic viewpoints.",
        activities: ["Sunrise at Pangong", "Chang La Pass", "Thiksey Monastery", "Return to Leh"]
      },
      {
        day: 6,
        title: "Leh - Free Day",
        description: "Leisure day for shopping, exploring local culture, or optional activities.",
        activities: ["Shopping at Leh Market", "Optional monastery visits", "Cultural interactions", "Rest day"]
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer to airport for onward journey with beautiful memories of Ladakh.",
        activities: ["Hotel checkout", "Airport transfer", "Departure"]
      }
    ]
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src={itinerary.image}
          alt={itinerary.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="font-serif text-5xl md:text-6xl mb-4">
              {itinerary.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-lg">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {itinerary.duration}
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                {itinerary.rating}
              </div>
              <div className="text-2xl font-bold">
                {itinerary.price}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          to="/itineraries" 
          className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Itineraries
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="font-serif text-3xl text-stone-800 mb-6">Overview</h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                {itinerary.description}
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="font-serif text-3xl text-stone-800 mb-8">Detailed Itinerary</h2>
              <div className="space-y-8">
                {itinerary.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-stone-300 pl-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-stone-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                        {day.day}
                      </div>
                      <h3 className="font-serif text-xl text-stone-800">{day.title}</h3>
                    </div>
                    <p className="text-stone-600 mb-4">{day.description}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {day.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center text-sm text-stone-600">
                          <CheckCircle className="h-4 w-4 mr-2 text-stone-500" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Booking Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-stone-800 mb-2">{itinerary.price}</div>
                <div className="text-stone-600">per person</div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-stone-600">Duration</span>
                  <span className="font-medium">{itinerary.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-600">Group Size</span>
                  <span className="font-medium">2-12 people</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-600">Rating</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-medium">{itinerary.rating}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-stone-800 text-white py-3 rounded-lg text-sm tracking-widest hover:bg-stone-700 transition-colors duration-300">
                BOOK NOW
              </button>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-serif text-xl text-stone-800 mb-4">What's Included</h3>
              <div className="space-y-2">
                {itinerary.included.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-stone-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-serif text-xl text-stone-800 mb-4">Highlights</h3>
              <div className="space-y-2">
                {itinerary.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="h-4 w-4 text-stone-600 mr-3 flex-shrink-0" />
                    <span className="text-stone-600 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetails;
