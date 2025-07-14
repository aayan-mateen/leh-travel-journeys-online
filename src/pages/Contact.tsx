
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDates: '',
    groupSize: '',
    interests: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-amber-800 to-stone-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586339277861-b0b895343ba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-stone-200">
            Let's plan your perfect Ladakh adventure
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="font-serif text-3xl text-stone-800 mb-8">
                Plan Your Journey
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 mb-2">Preferred Travel Dates</label>
                    <input
                      type="text"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      placeholder="e.g., June 2024"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 mb-2">Group Size</label>
                    <select
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">Select group size</option>
                      <option value="1">Solo traveler</option>
                      <option value="2">2 people</option>
                      <option value="3-5">3-5 people</option>
                      <option value="6-10">6-10 people</option>
                      <option value="10+">More than 10</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-stone-700 mb-2">Interests</label>
                    <select
                      name="interests"
                      value={formData.interests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">Select your interest</option>
                      <option value="culture">Cultural experiences</option>
                      <option value="adventure">Adventure activities</option>
                      <option value="spiritual">Spiritual journey</option>
                      <option value="photography">Photography tour</option>
                      <option value="luxury">Luxury travel</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 mb-2">Tell us about your dream trip</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Share your travel preferences, special requirements, or any questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-stone-800 text-white py-4 text-sm tracking-widest hover:bg-stone-700 transition-colors duration-300"
                >
                  SEND INQUIRY
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-serif text-2xl text-stone-800 mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Visit Our Office</p>
                      <p className="text-stone-600">
                        Main Bazaar Road<br />
                        Leh, Ladakh 194101<br />
                        Jammu & Kashmir, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Call Us</p>
                      <p className="text-stone-600">
                        +91 98765 43210<br />
                        +91 98765 43211
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Email Us</p>
                      <p className="text-stone-600">
                        info@lehwanderer.com<br />
                        bookings@lehwanderer.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Office Hours</p>
                      <p className="text-stone-600">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: 10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-8 rounded-lg border border-amber-200">
                <h4 className="font-serif text-xl text-stone-800 mb-4">
                  Quick Response Guarantee
                </h4>
                <p className="text-stone-600 mb-4">
                  We understand the excitement of planning your Ladakh adventure. 
                  Our team responds to all inquiries within 2 hours during business hours.
                </p>
                <p className="text-stone-600">
                  For immediate assistance, WhatsApp us using the chat widget below!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
