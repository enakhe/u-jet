import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
	return (
		<div className="min-h-screen bg-lightBg">
			<ScrollProgressBar />
			<Navbar />
			<main>
				<Hero />
				<About />
				<Features />
				<Testimonials />
				<CTA />
				<ContactForm />
				<FAQ />
			</main>
			<Footer />
		</div>
	);
}

export default App;