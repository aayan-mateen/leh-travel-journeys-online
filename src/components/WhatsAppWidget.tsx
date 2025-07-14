
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const whatsappNumber = "+919876543210"; // Replace with actual number
  const message = "Hello! I'm interested in exploring Leh travel packages. Can you help me plan my journey?";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} />
        <div className="absolute right-full mr-3 bottom-1/2 transform translate-y-1/2 bg-stone-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat with us on WhatsApp
        </div>
      </button>
    </div>
  );
};

export default WhatsAppWidget;
