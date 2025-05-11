import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

const Navbar: React.FC = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<motion.header
			className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-charcoal/95 shadow-md' : 'bg-transparent'
				}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 md:h-20">
					<div className="flex items-center">
						<a href="#" className="flex items-center">
							<Plane className="h-8 w-8 text-gold" />
							<span className="ml-2 text-xl font-bold text-white">UJET</span>
						</a>
					</div>

					<nav className="hidden md:flex space-x-10">
						<a href="#about" className="text-sm text-white hover:text-gold transition-colors">About</a>
						<a href="#features" className="text-sm text-white hover:text-gold transition-colors">Features</a>
						<a href="#testimonials" className="text-sm text-white hover:text-gold transition-colors">Testimonials</a>
						<a href="#faq" className="text-sm text-white hover:text-gold transition-colors">FAQ</a>
					</nav>

					<div className='mx-2 lg:mx-0'>
						<motion.a
							href="#waitlist"
							className="btn-primary text-sm"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Join Waitlist
						</motion.a>
					</div>
				</div>
			</div>
		</motion.header>
	);
};

export default Navbar;