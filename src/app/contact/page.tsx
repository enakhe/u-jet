"use client";

import Header from "@/components/layouts/Header";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle, Users } from "lucide-react";

export default function Contact() {
    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            details: "hello@ujet.com",
            description: "General inquiries and support",
        },
        {
            icon: Phone,
            title: "Phone",
            details: "+1 (555) 123-4567",
            description: "24/7 customer support",
        },
        {
            icon: MapPin,
            title: "Headquarters",
            details: "New York, NY",
            description: "United States",
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: "24/7 Available",
            description: "Round-the-clock support",
        },
    ];

    const departments = [
        {
            name: "Customer Support",
            email: "support@ujet.com",
            description:
                "General inquiries, booking assistance, and customer service",
            icon: MessageCircle,
        },
        {
            name: "Business Partnerships",
            email: "partnerships@ujet.com",
            description:
                "Aircraft operator partnerships and business development",
            icon: Users,
        },
        {
            name: "Media & Press",
            email: "press@ujet.com",
            description:
                "Media inquiries, press releases, and public relations",
            icon: Mail,
        },
    ];

    return (
        <div className="min-h-screen bg-lightBg">
            <ScrollProgressBar />
            {/* <Header /> */}

            <main className="pt-20">
                {/* Hero Section */}
                <section className="section-padding bg-gradient-to-b from-primary/10 via-white to-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-charcoal">
                                Get in{" "}
                                <span className="gradient-text">Touch</span>
                            </h1>
                            <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
                                Ready to experience luxury travel like never
                                before? Our team is here to help you every step
                                of the way. Reach out to us for questions,
                                partnerships, or to join our exclusive waitlist.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="section-padding bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="text-center bg-lightBg/30 rounded-xl p-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{
                                            once: true,
                                            margin: "-100px",
                                        }}
                                        transition={{
                                            duration: 0.7,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <IconComponent className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-charcoal mb-2">
                                            {info.title}
                                        </h3>
                                        <p className="text-lg font-medium text-primary mb-2">
                                            {info.details}
                                        </p>
                                        <p className="text-charcoal/60">
                                            {info.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="section-padding">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                className="text-center mb-16"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal">
                                    Send Us a Message
                                </h2>
                                <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
                                    Have a question or want to learn more about
                                    UJET? Fill out the form below and we&apos;ll
                                    get back to you within 24 hours.
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-white rounded-2xl shadow-lg p-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="firstName"
                                                className="block text-sm font-medium text-charcoal mb-2"
                                            >
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="Your first name"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="lastName"
                                                className="block text-sm font-medium text-charcoal mb-2"
                                            >
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="Your last name"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-charcoal mb-2"
                                            >
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-medium text-charcoal mb-2"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-charcoal mb-2"
                                        >
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        >
                                            <option value="">
                                                Select a subject
                                            </option>
                                            <option value="general">
                                                General Inquiry
                                            </option>
                                            <option value="membership">
                                                Membership Information
                                            </option>
                                            <option value="partnership">
                                                Business Partnership
                                            </option>
                                            <option value="press">
                                                Media & Press
                                            </option>
                                            <option value="support">
                                                Customer Support
                                            </option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-charcoal mb-2"
                                        >
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            required
                                            className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="Tell us how we can help you..."
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-primaryDark transition-colors"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Send Message
                                    </motion.button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Departments */}
                <section className="section-padding bg-gradient-to-b from-white to-primary/5">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal">
                                Contact Our Teams
                            </h2>
                            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
                                For specific inquiries, reach out directly to
                                our specialized teams.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {departments.map((dept, index) => {
                                const IconComponent = dept.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{
                                            once: true,
                                            margin: "-100px",
                                        }}
                                        transition={{
                                            duration: 0.7,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <IconComponent className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-charcoal mb-4 text-center">
                                            {dept.name}
                                        </h3>
                                        <p className="text-charcoal/80 mb-6 text-center">
                                            {dept.description}
                                        </p>
                                        <div className="text-center">
                                            <a
                                                href={`mailto:${dept.email}`}
                                                className="text-primary font-medium hover:text-primaryDark transition-colors"
                                            >
                                                {dept.email}
                                            </a>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
                                Find answers to common questions about UJET and
                                our services.
                            </p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto space-y-6">
                            {[
                                {
                                    question: "When will UJET launch?",
                                    answer: "We're currently in development and plan to launch our platform in 2024. Join our waitlist to be among the first to experience luxury travel at incredible rates.",
                                },
                                {
                                    question:
                                        "How much can I save with empty leg flights?",
                                    answer: "Empty leg flights typically offer savings of 30-50% compared to standard private jet charter rates, making luxury travel more accessible than ever.",
                                },
                                {
                                    question:
                                        "What types of aircraft are available?",
                                    answer: "Our fleet includes everything from light jets for short trips to ultra-long-range aircraft for intercontinental travel, all from trusted operators.",
                                },
                                {
                                    question: "Is there a membership fee?",
                                    answer: "Yes, we offer different membership tiers starting from $99/month, each with varying benefits and access levels to our platform.",
                                },
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <h3 className="text-lg font-semibold text-charcoal mb-3">
                                        {faq.question}
                                    </h3>
                                    <p className="text-charcoal/80">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
