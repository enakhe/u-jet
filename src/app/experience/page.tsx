import Header from "@/components/layouts/Header";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { motion } from "framer-motion";
import { Star, Clock, MapPin, Users, Heart, Globe } from "lucide-react";

const Experience: React.FC = () => {
    const experiences = [
        {
            title: "Luxury City Breaks",
            description:
                "Escape to the world's most glamorous cities with our curated luxury experiences",
            duration: "2-3 days",
            locations: ["Paris", "Monaco", "Dubai", "New York"],
            features: [
                "5-star accommodations",
                "Private city tours",
                "Michelin dining",
                "VIP access",
            ],
            price: "From $5,000",
            image: "/api/placeholder/400/300",
        },
        {
            title: "Exotic Beach Retreats",
            description:
                "Unwind at exclusive beach destinations with unparalleled luxury",
            duration: "4-7 days",
            locations: ["Maldives", "Seychelles", "Bora Bora", "St. Barts"],
            features: [
                "Private villa accommodation",
                "Yacht charters",
                "Spa treatments",
                "Beach dining",
            ],
            price: "From $8,000",
            image: "/api/placeholder/400/300",
        },
        {
            title: "Adventure Expeditions",
            description:
                "Combine luxury with adventure in the world's most breathtaking locations",
            duration: "5-10 days",
            locations: [
                "Swiss Alps",
                "African Safari",
                "Antarctica",
                "Patagonia",
            ],
            features: [
                "Expert guides",
                "Luxury camps",
                "Adventure gear",
                "Photography services",
            ],
            price: "From $12,000",
            image: "/api/placeholder/400/300",
        },
        {
            title: "Cultural Immersions",
            description:
                "Experience authentic cultures with exclusive access and luxury comfort",
            duration: "3-7 days",
            locations: ["Japan", "India", "Morocco", "Peru"],
            features: [
                "Cultural experts",
                "Private ceremonies",
                "Artisan workshops",
                "Local cuisine",
            ],
            price: "From $6,000",
            image: "/api/placeholder/400/300",
        },
    ];

    const experienceStats = [
        {
            number: "50+",
            label: "Destinations",
            icon: Globe,
        },
        {
            number: "200+",
            label: "Curated Experiences",
            icon: Star,
        },
        {
            number: "24/7",
            label: "Concierge Support",
            icon: Clock,
        },
        {
            number: "100%",
            label: "Customizable",
            icon: Heart,
        },
    ];

    return (
        <div className="min-h-screen bg-lightBg">
            <ScrollProgressBar />
            <Header />

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
                                Extraordinary{" "}
                                <span className="gradient-text">
                                    Experiences
                                </span>
                            </h1>
                            <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
                                Beyond just flights, UJET offers curated luxury
                                experiences that transform your journey into
                                unforgettable memories. From exclusive
                                destinations to personalized adventures, we
                                create moments that last a lifetime.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Experience Stats */}
                <section className="section-padding bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {experienceStats.map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="text-center"
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
                                        <div className="text-3xl font-bold text-primary mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-charcoal/60 font-medium">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Experience Categories */}
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
                                Curated Experience Categories
                            </h2>
                            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
                                Each experience is carefully crafted to provide
                                unparalleled luxury, authenticity, and
                                exclusivity.
                            </p>
                        </motion.div>

                        <div className="space-y-16">
                            {experiences.map((experience, index) => (
                                <motion.div
                                    key={experience.title}
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                                        index % 2 === 1
                                            ? "lg:grid-flow-col-dense"
                                            : ""
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <div
                                        className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                                    >
                                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-80 flex items-center justify-center">
                                            <div className="text-center">
                                                <Star className="w-24 h-24 text-primary mx-auto mb-4" />
                                                <p className="text-charcoal/60">
                                                    Experience Image
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                                    >
                                        <h3 className="text-3xl font-bold text-charcoal mb-4">
                                            {experience.title}
                                        </h3>
                                        <p className="text-lg text-charcoal/80 mb-6">
                                            {experience.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                                <div className="text-sm text-charcoal/60 mb-1">
                                                    Duration
                                                </div>
                                                <div className="font-semibold text-charcoal">
                                                    {experience.duration}
                                                </div>
                                            </div>
                                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                                <div className="text-sm text-charcoal/60 mb-1">
                                                    Starting From
                                                </div>
                                                <div className="font-semibold text-primary">
                                                    {experience.price}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-semibold text-charcoal mb-3 flex items-center">
                                                <MapPin className="w-4 h-4 mr-2" />
                                                Popular Destinations:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {experience.locations.map(
                                                    (
                                                        location,
                                                        locationIndex
                                                    ) => (
                                                        <span
                                                            key={locationIndex}
                                                            className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                                                        >
                                                            {location}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-semibold text-charcoal mb-3">
                                                What's Included:
                                            </h4>
                                            <ul className="space-y-1">
                                                {experience.features.map(
                                                    (feature, featureIndex) => (
                                                        <li
                                                            key={featureIndex}
                                                            className="text-charcoal/80 flex items-center"
                                                        >
                                                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                                            {feature}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        <motion.button
                                            className="bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primaryDark transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Learn More
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Custom Experiences */}
                <section className="section-padding bg-gradient-to-b from-white to-primary/5">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal">
                                Custom Experience Design
                            </h2>
                            <p className="text-lg text-charcoal/80 mb-12">
                                Our expert concierge team works with you to
                                create completely bespoke experiences tailored
                                to your preferences, interests, and special
                                occasions.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Personal Consultation",
                                        description:
                                            "One-on-one planning session with our experience designers",
                                    },
                                    {
                                        title: "Bespoke Itineraries",
                                        description:
                                            "Fully customized experiences designed just for you",
                                    },
                                    {
                                        title: "24/7 Support",
                                        description:
                                            "Round-the-clock assistance throughout your journey",
                                    },
                                ].map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white rounded-xl p-6 shadow-sm"
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
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Heart className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-charcoal mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-charcoal/60">
                                            {service.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
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
                                Ready for Your Next Adventure?
                            </h2>
                            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                                Let us create an extraordinary experience that
                                exceeds your wildest dreams. Join our waitlist
                                to be among the first to access these exclusive
                                opportunities.
                            </p>
                            <motion.button
                                className="bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-white/90 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Planning Your Experience
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Experience;
