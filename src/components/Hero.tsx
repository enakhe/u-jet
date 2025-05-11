import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
	const [currentImage, setCurrentImage] = useState(0);

	const images = [
		"https://media.istockphoto.com/id/2103032687/photo/champagne-and-flowers-on-table-on-private-jet.jpg?s=612x612&w=0&k=20&c=GXm0DdkWt74WGOijc8H6UQoC8LxW7AwVIvNodAdwnMQ=",
		"https://media.istockphoto.com/id/2161688896/video/passengers-boarding-private-jet-with-pilot-greeting.avif?s=640x640&k=20&c=pxfRwVUvAyuHFXupfioUb6jAcDgK9uiGXR-R-H6ZRZQ=",
		"https://media.istockphoto.com/id/1495164703/photo/woman-holding-champagne-glass-in-private-jet.jpg?s=612x612&w=0&k=20&c=Djtc-rD8gxFr6tm87fxzpEPm5vhr9JSZSBYT6Q3HY9Y="
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			{/* Background carousel */}
			<AnimatePresence mode="wait">
				<motion.div
					key={currentImage}
					className="absolute inset-0 z-0"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
				>
					<img
						src={images[currentImage]}
						alt="Private Jet"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 hero-overlay"></div>
				</motion.div>
			</AnimatePresence>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center max-w-3xl mx-auto">
					<motion.h1
						className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<span className="gradient-text">Luxury Travel,</span> <br />
						Now Within Reach
					</motion.h1>

					<motion.p
						className="text-lg md:text-xl text-white/90 mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Book empty leg flights on private jets at a fraction of the cost with UJET's innovative platform.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<motion.a
							href="#waitlist"
							className="btn-primary text-lg px-8 py-4"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							animate={{
								boxShadow: ["0px 0px 0px rgba(212, 175, 55, 0)", "0px 0px 20px rgba(212, 175, 55, 0.5)", "0px 0px 0px rgba(212, 175, 55, 0)"],
							}}
							transition={{
								boxShadow: {
									repeat: Infinity,
									duration: 2,
								},
							}}
						>
							Join the Waitlist
						</motion.a>
					</motion.div>
				</div>
			</div>

			{/* Carousel indicators */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
				{images.map((_, index) => (
					<button
						title='Carousel Indicator'
						key={index}
						className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === index ? 'bg-gold w-4' : 'bg-white/50'
							}`}
						onClick={() => setCurrentImage(index)}
					/>
				))}
			</div>
		</section>
	);
};

export default Hero;