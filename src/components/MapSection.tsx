
import React from 'react';

const MapSection = () => {
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4">
            Find Us in Leh
          </h2>
          <p className="text-stone-600 text-lg">
            Visit our office in the heart of Leh for personalized travel planning
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.1094449976254!2d77.57720647572144!3d34.16911937311327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb41789cc9b1%3A0x63fd02c9031893e1!2sFrozen%20Himalayas!5e0!3m2!1sen!2sin!4v1752541210593!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 md:h-[450px]"
            />
          </div>
          
          <div className="p-6 bg-gradient-to-r from-stone-50 to-amber-50 border-t border-stone-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-serif text-xl text-stone-800 mb-2">Office Address</h3>
                <p className="text-stone-600">
                  Main Bazaar Road<br />
                  Leh, Ladakh 194101<br />
                  Jammu & Kashmir, India
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-stone-800 mb-2">Getting There</h3>
                <p className="text-stone-600">
                  Located in the bustling Main Bazaar area, our office is easily accessible by foot from most hotels in Leh. Look for the "Frozen Himalayas" signboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
