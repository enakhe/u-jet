import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready for Luxury at <span className="text-gold">Incredible Rates</span>?
            </h2>
            
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Be the first to experience affordable luxury travel when our app launches.
            </p>
            
            <motion.a
              href="#waitlist"
              className="btn-primary text-lg px-10 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(212, 175, 55, 0)", "0px 0px 20px rgba(212, 175, 55, 0.5)", "0px 0px 0px rgba(212, 175, 55, 0)"],
              }}
              transition={{ 
                boxShadow: { 
                  repeat: Infinity, 
                  duration: 3,
                },
              }}
            >
              Join the Waitlist Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;