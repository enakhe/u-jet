"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Header from "@/components/layouts/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import heroImg from "../assets/img/hero-img.png";
import whyFlyPrivateImg from "../assets/img/why-fly-private.png";
import fleetOne from "../assets/img/fleet-one.png";
import fleetTwo from "../assets/img/fleet-two.png";
import fleetThree from "../assets/img/fleet-three.png";
import fleetFour from "../assets/img/fleet-four.png";
import fleetFive from "../assets/img/fleet-five.png";

export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        heroImg,
        "https://media.istockphoto.com/id/2103032687/photo/champagne-and-flowers-on-table-on-private-jet.jpg?s=612x612&w=0&k=20&c=GXm0DdkWt74WGOijc8H6UQoC8LxW7AwVIvNodAdwnMQ=",
        "https://media.istockphoto.com/id/2161688896/video/passengers-boarding-private-jet-with-pilot-greeting.avif?s=640x640&k=20&c=pxfRwVUvAyuHFXupfioUb6jAcDgK9uiGXR-R-H6ZRZQ=",
        "https://media.istockphoto.com/id/1495164703/photo/woman-holding-champagne-glass-in-private-jet.jpg?s=612x612&w=0&k=20&c=Djtc-rD8gxFr6tm87fxzpEPm5vhr9JSZSBYT6Q3HY9Y=",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="min-h-screen bg-lightBg">
            <ScrollProgressBar />
            <Header />
            <main>
                <section className="relative flex items-center overflow-hidden pt-20 h-[70vh] lg:h-[70vh]">
                    {/* Background carousel */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImage}
                            className="absolute inset-x-0 top-20 z-0 h-[70vh] md:h-[60vh] lg:h-[70vh] w-full"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 1 }}
                            transition={{ duration: 5 }}
                        >
                            <Image
                                src={images[currentImage]}
                                alt="Private Jet"
                                fill
                                className="object-cover"
                                priority={currentImage === 0}
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                            <div className="absolute inset-0 hero-overlay"></div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="">
                            <motion.h1
                                className="text-4xl max-w-5xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-relaxed lg:leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                Experience the Best Way to Fly{" "}
                                <span className="text-primary bg-white px-2 py-1 rounded">
                                    Private
                                </span>{" "}
                                Without the{" "}
                                <span className="text-primary bg-white px-2 py-1 rounded">
                                    Price
                                </span>{" "}
                                Tag
                            </motion.h1>

                            <motion.p
                                className="text-lg md:text-xl max-w-5xl text-white mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Enjoy the comfort and privacy of a private jet
                                without paying full price. With access to
                                exclusive empty leg flights, luxury travel has
                                never been more effortless or affordable.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <form
                                    className="flex max-w-xl rounded-[6px] overflow-hidden bg-white"
                                    onSubmit={e => {
                                        e.preventDefault();
                                    }}
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
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    currentImage === index
                                        ? "bg-primary w-4"
                                        : "bg-white/50"
                                }`}
                                onClick={() => setCurrentImage(index)}
                            />
                        ))}
                    </div>
                </section>

                {/* Why Fly Private Section */}
                <section className="section-padding bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="items-center mx-auto">
                            {/* Text Content */}
                            <motion.div
                                className="space-y-8"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                            >
                                {/* Sub-heading with red accent */}
                                <div className="flex space-x-3">
                                    <div className="w-1 h-6 bg-primary"></div>
                                    <span className="text-charcoal/60 text-sm font-medium tracking-wider uppercase">
                                        Why Fly Private?
                                    </span>
                                </div>

                                {/* Main Heading */}
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                                    Redefining the Way You Travel with Comfort,
                                    Privacy, and Freedom.
                                </h2>

                                {/* Body Paragraph */}
                                <p className="text-lg text-charcoal/100 p-4">
                                    Experience a new standard of travel designed
                                    entirely around you. From seamless booking
                                    to private terminals and tailored in-flight
                                    service, every detail is crafted for your
                                    comfort and privacy. With flexible flight
                                    options and the freedom to fly on your
                                    schedule, we make private aviation
                                    effortless and exceptional.
                                </p>
                            </motion.div>

                            {/* Image Section */}
                            <motion.div
                                className="relative w-full h-full "
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <Image
                                    src={whyFlyPrivateImg}
                                    alt="Why Fly Private"
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* How it Works Section */}
                <section className="section-padding bg-[#E8E8E8]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto">
                            {/* Header */}
                            <motion.div
                                className="space-y-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                            >
                                {/* Sub-heading with red accent */}
                                <div className="flex space-x-3">
                                    <div className="w-1 h-6 bg-primary"></div>
                                    <span className="text-charcoal/60 text-sm font-medium tracking-wider uppercase">
                                        How it Works
                                    </span>
                                </div>

                                {/* Main Heading */}
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                                    From Search to{" "}
                                    <span className="text-primary">Sky</span> in
                                    Just Three Steps
                                </h2>

                                {/* Description */}
                                <p className="text-lg text-charcoal/100 p-4">
                                    Booking a private flight shouldn't be
                                    complicated. With our streamlined process,
                                    you can find exclusive empty leg flights,
                                    secure your booking in minutes, and take off
                                    on your schedule all with world-class
                                    comfort and privacy.
                                </p>
                            </motion.div>

                            {/* Three Step Cards */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                                {/* Step 1: Search Flights - Larger card */}
                                <motion.div
                                    className="bg-primary transition-all duration-300 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                >
                                    {/* Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-8 h-8 text-primary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl lg:text-4xl font-bold text-center mb-6">
                                        Search Flights
                                    </h3>

                                    {/* Description */}
                                    <p className="text-lg text-white/100 text-center leading-relaxed">
                                        Browse a curated list of empty leg
                                        flights tailored to your preferred
                                        routes and schedule. Our platform makes
                                        it easy to explore destinations, compare
                                        options, and find exceptional deals on
                                        private travel.
                                    </p>
                                </motion.div>

                                {/* Step 2: Book Securely */}
                                <motion.div
                                    className="bg-slate-800 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                >
                                    {/* Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-8 h-8 text-primary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 15l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl lg:text-4xl font-bold text-center mb-6">
                                        Book Securely
                                    </h3>

                                    {/* Description */}
                                    <p className="text-lg text-white/100 text-center leading-relaxed">
                                        Once you've found the perfect flight,
                                        booking takes just minutes. With secure
                                        payment options and instant
                                        confirmation, you can lock in your
                                        journey with confidence, no
                                        back-and-forth.
                                    </p>
                                </motion.div>

                                {/* Step 3: Fly in Comfort */}
                                <motion.div
                                    className="bg-primary rounded-2xl p-8 lg:p-12 shadow-md relative overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: 0.3 }}
                                >
                                    {/* Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-8 h-8 text-primary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-center">
                                        Fly in Comfort
                                    </h3>

                                    {/* Description */}
                                    <p className="text-lg text-white/100 text-center leading-relaxed">
                                        On travel day, skip the crowds and long
                                        lines. Arrive at a private terminal,
                                        enjoy a smooth check-in experience, and
                                        relax as you fly in privacy and luxury,
                                        arriving refreshed and right on
                                        schedule.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Call to Action Button */}
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                            >
                                <motion.button
                                    className="bg-primary text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Let's get you in a Jet!
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Fleet Section */}
                <section className="section-padding bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto">
                            {/* Header */}
                            <motion.div
                                className="space-y-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                            >
                                {/* Sub-heading with red accent */}
                                <div className="flex space-x-3">
                                    <div className="w-1 h-6 bg-primary"></div>
                                    <span className="text-charcoal/60 text-sm font-medium tracking-wider uppercase">
                                        Our Fleets
                                    </span>
                                </div>

                                {/* Main Heading */}
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                                    A World-Class Fleet for Every Journey
                                </h2>

                                {/* Description */}
                                <p className="text-lg text-charcoal/100 p-4">
                                    Our carefully curated fleet includes a range
                                    of private aircraft, from light jets for
                                    quick getaways to long-range jets designed
                                    for international travel. Every aircraft is
                                    maintained to the highest standards,
                                    ensuring safety, comfort, and a seamless
                                    experience every time you fly.
                                </p>
                            </motion.div>

                            {/* Three Step Cards */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                                <motion.div
                                    className="lg:col-span-2 transition-all duration-300 rounded-2xl relative overflow-hidden cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                >
                                    <div className="mb-6 relative">
                                        <Image
                                            src={fleetOne}
                                            alt="Fleet One"
                                            width={1000}
                                            height={1000}
                                            className="w-full h-full hover:scale-105 transition-all hover:bg-black/30 duration-300 hover:shadow-lg object-cover rounded-2xl"
                                        />

                                        <div className="absolute bottom-0 left-0 p-4 rounded-br-2xl transition-all duration-300">
                                            <div className="w-6 h-1 bg-primary"></div>
                                            <h4 className="text-white text-sm font-medium tracking-wider uppercase">
                                                Long Range Jets
                                            </h4>
                                            <p className="text-white text-md font-medium tracking-wider uppercase">
                                                Bombardier Challenger 3500
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <Image
                                                src={fleetTwo}
                                                alt="Fleet One"
                                                className="w-full h-full hover:scale-105 transition-all hover:bg-black/30 duration-300 hover:shadow-lg object-cover rounded-2xl"
                                            />

                                            <div className="absolute bottom-0 left-0 p-4 rounded-br-2xl transition-all duration-300">
                                                <div className="w-6 h-1 bg-primary"></div>
                                                <h4 className="text-white text-sm font-medium tracking-wider uppercase">
                                                    Mid Size Jets.
                                                </h4>
                                                <p className="text-white text-md font-medium tracking-wider uppercase">
                                                    Hawker 800XP.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <Image
                                                src={fleetThree}
                                                alt="Fleet One"
                                                className="w-full h-full hover:scale-105 transition-all hover:bg-black/30 duration-300 hover:shadow-lg object-cover rounded-2xl"
                                            />

                                            <div className="absolute bottom-0 left-0 p-4 rounded-br-2xl transition-all duration-300">
                                                <div className="w-6 h-1 bg-primary"></div>
                                                <h4 className="text-white text-sm font-medium tracking-wider uppercase">
                                                    Long Range Jets
                                                </h4>
                                                <p className="text-white text-md font-medium tracking-wider uppercase">
                                                    Dassault Falcon 8X
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="transition-all duration-30 rounded-2xl relative overflow-hidden cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                >
                                    <div className="mb-6 relative">
                                        <Image
                                            src={fleetFive}
                                            alt="Fleet Four"
                                            width={1000}
                                            height={1000}
                                            className="w-full h-full hover:scale-105 transition-all hover:bg-black/30 duration-300 hover:shadow-lg object-cover rounded-2xl"
                                        />

                                        <div className="absolute bottom-0 left-0 p-4 rounded-br-2xl transition-all duration-300">
                                            <div className="w-6 h-1 bg-primary"></div>
                                            <h4 className="text-white text-sm font-medium tracking-wider uppercase">
                                                Mid Size Jets
                                            </h4>
                                            <p className="text-white text-md font-medium tracking-wider uppercase">
                                                Gulfstream G150.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="relative">
                                            <Image
                                                src={fleetFour}
                                                alt="Fleet Four"
                                                width={1000}
                                                height={1000}
                                                className="w-full h-full hover:scale-105 transition-all hover:bg-black/30 duration-300 hover:shadow-lg object-cover rounded-2xl"
                                            />

                                            <div className="absolute bottom-0 left-0 p-4 rounded-br-2xl transition-all duration-300">
                                                <div className="w-6 h-1 bg-primary"></div>
                                                <h4 className="text-white text-sm font-medium tracking-wider uppercase">
                                                    Mid Size Jets
                                                </h4>
                                                <p className="text-white text-md font-medium tracking-wider uppercase">
                                                    Embraer Legacy 450. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
