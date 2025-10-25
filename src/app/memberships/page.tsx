"use client";

import Header from "@/components/layouts/Header";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { motion } from "framer-motion";
import { Check, Crown, Zap, Shield } from "lucide-react";

export default function Memberships() {
    const membershipTiers = [
        {
            name: "Basic",
            price: "$99",
            period: "/month",
            description: "Perfect for occasional travelers",
            features: [
                "Access to empty leg flights",
                "Basic customer support",
                "Email notifications",
                "Standard booking process",
            ],
            icon: Shield,
            popular: false,
        },
        {
            name: "Premium",
            price: "$199",
            period: "/month",
            description: "For frequent luxury travelers",
            features: [
                "Everything in Basic",
                "Priority booking access",
                "24/7 dedicated support",
                "Advanced flight notifications",
                "Exclusive member events",
            ],
            icon: Crown,
            popular: true,
        },
        {
            name: "VIP",
            price: "$399",
            period: "/month",
            description: "Ultimate luxury experience",
            features: [
                "Everything in Premium",
                "Personal concierge service",
                "Custom flight arrangements",
                "Access to partner lounges",
                "Complimentary upgrades",
                "Private jet recommendations",
            ],
            icon: Zap,
            popular: false,
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
                                Choose Your{" "}
                                <span className="gradient-text">
                                    Membership
                                </span>
                            </h1>
                            <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
                                Join UJET and unlock access to luxury private
                                jet travel at incredible rates. Select the
                                membership tier that fits your travel needs.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Membership Tiers */}
                <section className="section-padding">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {membershipTiers.map((tier, index) => {
                                const IconComponent = tier.icon;
                                return (
                                    <motion.div
                                        key={tier.name}
                                        className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                                            tier.popular
                                                ? "ring-2 ring-primary scale-105"
                                                : ""
                                        }`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.7,
                                            delay: index * 0.1,
                                        }}
                                        whileHover={{ y: -5 }}
                                    >
                                        {tier.popular && (
                                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                                                    Most Popular
                                                </span>
                                            </div>
                                        )}

                                        <div className="text-center mb-8">
                                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                                <IconComponent className="w-8 h-8 text-primary" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-charcoal mb-2">
                                                {tier.name}
                                            </h3>
                                            <p className="text-charcoal/60 mb-6">
                                                {tier.description}
                                            </p>

                                            <div className="mb-6">
                                                <span className="text-4xl font-bold text-primary">
                                                    {tier.price}
                                                </span>
                                                <span className="text-charcoal/60">
                                                    {tier.period}
                                                </span>
                                            </div>
                                        </div>

                                        <ul className="space-y-4 mb-8">
                                            {tier.features.map(
                                                (feature, featureIndex) => (
                                                    <li
                                                        key={featureIndex}
                                                        className="flex items-center"
                                                    >
                                                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                                        <span className="text-charcoal/80">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>

                                        <motion.button
                                            className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                                                tier.popular
                                                    ? "bg-primary text-white hover:bg-primaryDark"
                                                    : "bg-charcoal/10 text-charcoal hover:bg-charcoal/20"
                                            }`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Choose {tier.name}
                                        </motion.button>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
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
                                Why Choose UJET Membership?
                            </h2>
                            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
                                Join thousands of satisfied members who have
                                discovered the luxury of private jet travel at
                                accessible prices.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    title: "Up to 50% Savings",
                                    description:
                                        "Access empty leg flights at incredible discounts",
                                },
                                {
                                    title: "24/7 Support",
                                    description:
                                        "Round-the-clock assistance for all your travel needs",
                                },
                                {
                                    title: "Premium Network",
                                    description:
                                        "Access to top-tier private jet operators",
                                },
                                {
                                    title: "Flexible Booking",
                                    description:
                                        "Book flights that fit your schedule",
                                },
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <div className="w-8 h-8 bg-primary rounded-full"></div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-charcoal mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-charcoal/60">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-primary">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Ready to Experience Luxury Travel?
                            </h2>
                            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                                Join our waitlist today and be among the first
                                to access affordable private jet travel.
                            </p>
                            <motion.button
                                className="bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-white/90 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Join Waitlist Now
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
}
