"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import heroImg from "../assets/img/hero-img.png";

const Hero: React.FC = () => {
	const [currentImage, setCurrentImage] = useState(0);

	const images = [
		heroImg,
		"https://media.istockphoto.com/id/2103032687/photo/champagne-and-flowers-on-table-on-private-jet.jpg?s=612x612&w=0&k=20&c=GXm0DdkWt74WGOijc8H6UQoC8LxW7AwVIvNodAdwnMQ=",
		"https://media.istockphoto.com/id/2161688896/video/passengers-boarding-private-jet-with-pilot-greeting.avif?s=640x640&k=20&c=pxfRwVUvAyuHFXupfioUb6jAcDgK9uiGXR-R-H6ZRZQ=",
		"https://media.istockphoto.com/id/1495164703/photo/woman-holding-champagne-glass-in-private-jet.jpg?s=612x612&w=0&k=20&c=Djtc-rD8gxFr6tm87fxzpEPm5vhr9JSZSBYT6Q3HY9Y=",
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 5000);

		return () => clearInterval(timer);
	}, [images.length]);

	return (
		<section className="relative flex items-center overflow-hidden pt-20 h-[70vh]">
			{/* Background carousel */}
			<AnimatePresence mode="wait">
				<motion.div
					key={currentImage}
					className="absolute inset-x-0 top-20 z-0 h-[50vh] md:h-[60vh] lg:h-[70vh] w-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
				>
					<Image
						src={images[currentImage]}
						alt="Private Jet"
						fill
						className="object-cover"
						priority={currentImage === 0}
						style={{ objectFit: 'cover', objectPosition: 'center' }}
					/>
					<div className="absolute inset-0 hero-overlay"></div>
				</motion.div>
			</AnimatePresence>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="">
					<motion.h1
						className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<span className="text-white">Experience the Best Way to Fly,</span> <br />
						
						<p className="my-5">
							<span className="text-primary bg-white px-2 py-1 rounded">Private</span> Without the <span className="text-primary bg-white px-2 py-1 rounded">Price</span> Tag
						</p>
						
					</motion.h1>

					<motion.p
						className="text-lg md:text-xl max-w-5xl text-white/90 mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Enjoy the comfort and privacy of a private jet without paying full price. With access to exclusive empty leg flights, luxury travel has never been more effortless or affordable.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<form
							className="flex max-w-xl rounded-[6px] overflow-hidden bg-white"
							onSubmit={e => { e.preventDefault();}}
							autoComplete="off"
						>
							<input
								type="email"
								name="email"
								required
								className="flex-1 px-5 py-3 outline-none border-none bg-white text-charcoal placeholder:text-charcoal/50 text-base focus:ring-0"
								placeholder="Enter email to join the exclusive list"
								aria-label="Enter email to join the exclusive list"
							/>
							<motion.button
								type="submit"
								className="bg-primary text-white text-base font-medium px-7 whitespace-nowrap transition-all duration-300 rounded-r"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}
								style={{
									borderTopLeftRadius: 0,
									borderBottomLeftRadius: 0,
									borderTopRightRadius: "6px",
									borderBottomRightRadius: "6px",
								}}
							>
								Join Waitlist
							</motion.button>
						</form>
					</motion.div>
				</div>
			</div>

			{/* Carousel indicators */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
				{images.map((_, index) => (
					<button
						title="Carousel Indicator"
						key={index}
						className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === index ? "bg-primary w-4" : "bg-white/50"
							}`}
						onClick={() => setCurrentImage(index)}
					/>
				))}
			</div>
		</section>
	);
};

export default Hero;
