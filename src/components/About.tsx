import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-charcoal">Our Value Proposition</h2>
          
          <div className="bg-lightBg/30 p-8 rounded-xl shadow-sm">
            <p className="text-lg leading-relaxed text-charcoal/90 mb-6">
              UJET is redefining private jet travel by making it affordable and accessible. We connect travelers with empty leg flights—unused return trips by private jets—offering luxury at up to <span className="font-semibold text-gold">50% off</span> standard rates.
            </p>
            
            <p className="text-lg leading-relaxed text-charcoal/90">
              Experience convenience, exclusivity, and value with our tech-driven solution.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-md"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-gold text-xl font-bold mb-2">50%</div>
              <div className="text-sm text-charcoal/80">Potential Savings</div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-md"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-gold text-xl font-bold mb-2">100+</div>
              <div className="text-sm text-charcoal/80">Partner Jets</div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-md"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-gold text-xl font-bold mb-2">24/7</div>
              <div className="text-sm text-charcoal/80">Flight Listings</div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-md"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-gold text-xl font-bold mb-2">$100/month</div>
              <div className="text-sm text-charcoal/80">Membership Fees</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;