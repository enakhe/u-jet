import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  CreditCard, 
  BarChart2, 
  Award, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden"
      whileHover={{ y: -5 }}
      layout
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-gold mr-4">
              {icon}
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </motion.div>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <p className="text-charcoal/80">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "Real-Time Flight Listings",
      description: "Browse available empty leg flights instantly. Our platform updates in real-time, ensuring you never miss an opportunity for luxury travel at incredible rates.",
      icon: <Clock size={24} />
    },
    {
      title: "Instant Booking",
      description: "Secure your flight with seamless, secure payments. Our streamlined booking process takes just minutes, giving you more time to prepare for your journey.",
      icon: <CreditCard size={24} />
    },
    {
      title: "AI-Powered Pricing",
      description: "Dynamic pricing optimizes deals based on demand. Our proprietary algorithms analyze multiple factors to ensure you're getting the absolute best value on every flight.",
      icon: <BarChart2 size={24} />
    },
    {
      title: "Membership Benefits",
      description: "Unlock exclusive offers with a premium profile. UJET members gain access to priority bookings, partner perks, and loyalty rewards to enhance your luxury travel experience.",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-gold/10 via-white to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Features</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            The UJET platform is designed with cutting-edge technology to make private jet travel accessible and seamless.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard 
                  title={feature.title} 
                  description={feature.description} 
                  icon={feature.icon} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto mt-16 p-8 bg-gradient-to-r from-gold/20 to-gold/5 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Powered by Technology</h3>
          <p className="text-center text-charcoal/80">
            UJET is built on AI-driven flight matching and real-time data, ensuring the best deals and seamless experiences for our customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;