import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate API call
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			setFormData({ name: '', email: '' });

			// Reset success message after 5 seconds
			setTimeout(() => {
				setIsSubmitted(false);
			}, 5000);
		}, 1500);
	};

	return (
		<section id="waitlist" className="section-padding bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.7 }}
						>
							<h2 className="text-3xl font-bold mb-6 text-charcoal">Join Our Waitlist</h2>
							<p className="text-charcoal/80 mb-8">
								Be among the first to experience UJET when we launch. Sign up for exclusive updates and early access to our app.
							</p>

							<form onSubmit={handleSubmit}>
								<div className="mb-4">
									<label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-charcoal/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
										placeholder="Your name"
									/>
								</div>

								<div className="mb-6">
									<label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-charcoal/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
										placeholder="you@example.com"
									/>
								</div>

								<motion.button
									type="submit"
									className="btn-primary w-full flex justify-center items-center"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										<span>Processing...</span>
									) : (
										<>
											<span>Join Waitlist</span>
											<Send size={18} className="ml-2" />
										</>
									)}
								</motion.button>

								{isSubmitted && (
									<motion.div
										className="mt-4 p-3 bg-success/10 text-success rounded-md"
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
									>
										Thanks for joining! We'll keep you updated on our launch.
									</motion.div>
								)}
							</form>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.7, delay: 0.2 }}
							className="flex flex-col justify-center"
						>
							<div className="rounded-xl overflow-hidden shadow-md">
								<img
									src="https://media.istockphoto.com/id/498556541/photo/flight-attendant.jpg?s=612x612&w=0&k=20&c=_Kru2YBgVsv3zsF4bFChWItBDuAjgywMUdlqFV-BsIQ="
									alt="Private Jet Atendant"
									className="w-full h-64 object-cover"
								/>
							</div>

							<div className="mt-8">
								<h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
								<p className="text-charcoal/80 mb-6">
									Follow our journey on social media for the latest updates.
								</p>

								<div className="flex space-x-4">
									<motion.a
										href="#"
										className="w-10 h-10 rounded-full flex items-center justify-center bg-charcoal/10 text-charcoal hover:bg-gold hover:text-white transition-colors"
										whileHover={{ scale: 1.1, rotate: 5 }}
										whileTap={{ scale: 0.9 }}
									>
										<Twitter size={20} />
									</motion.a>

									<motion.a
										href="#"
										className="w-10 h-10 rounded-full flex items-center justify-center bg-charcoal/10 text-charcoal hover:bg-gold hover:text-white transition-colors"
										whileHover={{ scale: 1.1, rotate: 5 }}
										whileTap={{ scale: 0.9 }}
									>
										<Instagram size={20} />
									</motion.a>

									<motion.a
										href="#"
										className="w-10 h-10 rounded-full flex items-center justify-center bg-charcoal/10 text-charcoal hover:bg-gold hover:text-white transition-colors"
										whileHover={{ scale: 1.1, rotate: 5 }}
										whileTap={{ scale: 0.9 }}
									>
										<Linkedin size={20} />
									</motion.a>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;