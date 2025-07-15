
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      id: "faq-1",
      question: "What is the best time to visit Ladakh?",
      answer: "The ideal time to visit Ladakh is from May to September when the weather is pleasant and most roads are accessible. Summer months (June-August) offer the warmest temperatures, while shoulder seasons provide fewer crowds and stunning landscapes."
    },
    {
      id: "faq-2",
      question: "Do I need any permits to visit Ladakh?",
      answer: "Indian citizens don't need permits for most areas in Ladakh. However, certain restricted areas like Nubra Valley, Pangong Tso, and Tso Moriri require Inner Line Permits (ILP). Foreign nationals need Protected Area Permits (PAP) for these regions."
    },
    {
      id: "faq-3",
      question: "How should I prepare for high altitude?",
      answer: "Acclimatization is crucial when visiting Ladakh (3,500m+ altitude). We recommend arriving 2-3 days early, staying hydrated, avoiding alcohol initially, and consulting your doctor about altitude sickness medication. Our itineraries include proper acclimatization periods."
    },
    {
      id: "faq-4",
      question: "What should I pack for a Ladakh trip?",
      answer: "Pack layers for varying temperatures, warm clothing for nights, comfortable trekking shoes, sunglasses, sunscreen (high SPF), lip balm, and personal medications. We provide detailed packing lists based on your specific itinerary and season of travel."
    },
    {
      id: "faq-5",
      question: "Are your tours suitable for families with children?",
      answer: "Yes! We offer family-friendly itineraries with comfortable accommodations and age-appropriate activities. However, we recommend consulting with us about altitude considerations for young children and elderly family members."
    },
    {
      id: "faq-6",
      question: "What is included in your tour packages?",
      answer: "Our packages typically include accommodation, meals, transportation, permits, experienced guides, and activities as mentioned in the itinerary. Specific inclusions vary by package - please check individual tour details or contact us for clarification."
    },
    {
      id: "faq-7",
      question: "Can I customize my itinerary?",
      answer: "Absolutely! We specialize in customized tours tailored to your interests, budget, and time constraints. Whether you're interested in adventure activities, cultural experiences, or photography tours, we can create a personalized itinerary just for you."
    },
    {
      id: "faq-8",
      question: "What is your cancellation policy?",
      answer: "Our cancellation policy varies based on the tour type and timing. Generally, cancellations made 30+ days in advance receive fuller refunds. Please refer to our terms and conditions or contact us directly for specific cancellation terms."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 text-lg">
            Everything you need to know about traveling to Ladakh with us
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="bg-stone-50 rounded-lg border border-stone-200 px-6"
            >
              <AccordionTrigger className="text-left font-medium text-stone-800 hover:text-stone-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-stone-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact-form" 
            className="inline-block bg-stone-800 text-white px-8 py-3 text-sm tracking-widest hover:bg-stone-700 transition-colors duration-300"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
