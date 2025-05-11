import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div 
      className="border-b border-charcoal/10 py-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={onToggle}
      >
        <h3 className="text-lg font-medium text-charcoal">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gold"
        >
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mt-3 text-charcoal/80">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What are empty leg flights?",
      answer: "Empty leg flights are return trips by private jets that would otherwise fly empty. These occur when a private jet is scheduled to return to its base after dropping off passengers, or when it needs to reposition for its next booking. Instead of flying empty, we make these flights available to you at significantly reduced rates."
    },
    {
      question: "How much can I save?",
      answer: "With UJET, you can save up to 50% off traditional private jet charter rates. The exact savings depend on various factors such as route popularity, timing, and availability, but the discounts are substantial compared to standard charter prices."
    },
    {
      question: "When will the app launch?",
      answer: "We're currently in the final stages of development. Sign up for our waitlist to be among the first to know when we launch and to get early access to the UJET platform. We'll keep you updated on our progress!"
    },
    {
      question: "Is booking secure?",
      answer: "Absolutely. UJET uses industry-standard encryption and secure payment processing. Your personal and payment information is protected with the highest level of security, and we never store sensitive payment details on our servers."
    }
  ];
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-lightBg/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Frequently Asked Questions</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Find answers to common questions about UJET and our service.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-charcoal/80 mb-6">
            Still have questions? We're here to help.
          </p>
          <a href="mailto:hello@ujet.com" className="text-gold hover:underline">
            Contact us at hello@ujet.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;