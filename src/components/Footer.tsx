'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <motion.div 
              className="flex items-center mb-6 md:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Plane className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold">UJET</span>
            </motion.div>
            
            <div className="flex space-x-8">
              <motion.a 
                href="#about" 
                className="text-white/80 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                About
              </motion.a>
              <motion.a 
                href="#features" 
                className="text-white/80 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                Features
              </motion.a>
              <motion.a 
                href="#testimonials" 
                className="text-white/80 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                Testimonials
              </motion.a>
              <motion.a 
                href="#faq" 
                className="text-white/80 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                FAQ
              </motion.a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-white/60 text-sm">
                  © 2025 UJET | All Rights Reserved
                </p>
              </div>
              
              <div className="flex space-x-6">
                <motion.a 
                  href="#" 
                  className="text-white/60 hover:text-primary text-sm transition-colors"
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-white/60 hover:text-primary text-sm transition-colors"
                  whileHover={{ y: -2 }}
                >
                  Terms of Service
                </motion.a>
                <motion.a 
                  href="mailto:hello@ujet.com" 
                  className="text-white/60 hover:text-primary text-sm transition-colors"
                  whileHover={{ y: -2 }}
                >
                  hello@ujet.com
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;