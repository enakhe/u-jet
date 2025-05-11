import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, delay }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -5 }}
    >
      <p className="italic text-charcoal/80 mb-4">"{quote}"</p>
      <p className="font-semibold text-charcoal">{author}</p>
      <p className="text-sm text-gold">{position}</p>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "UJET's concept makes private jet travel a reality for more people. This is a game-changer for the industry.",
      author: "Alexandra Reynolds",
      position: "Luxury Travel Expert"
    },
    {
      quote: "The platform's interface is intuitive, and the booking process is seamless. I can't wait for the full launch.",
      author: "Michael Chen",
      position: "Tech Investor"
    },
    {
      quote: "As someone who flies frequently, the potential savings with UJET's empty leg flights is incredibly appealing.",
      author: "James Wilson",
      position: "Business Traveler"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-lightBg/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">What People Are Saying</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            UJET is already generating excitement among luxury travelers and industry experts.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Potential Partner Airlines</h3>
            <div className="flex justify-center items-center space-x-8 flex-wrap">
              <div className="text-charcoal/50 font-medium py-2">NetJets</div>
              <div className="text-charcoal/50 font-medium py-2">Flexjet</div>
              <div className="text-charcoal/50 font-medium py-2">VistaJet</div>
              <div className="text-charcoal/50 font-medium py-2">XO</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;