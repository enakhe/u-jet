import Header from "@/components/layouts/Header";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { motion } from "framer-motion";
import { Plane, Users, Clock, Shield } from "lucide-react";

const Fleet: React.FC = () => {
    const aircraftTypes = [
        {
            name: "Light Jets",
            description: "Perfect for short trips and quick getaways",
            capacity: "4-6 passengers",
            range: "1,500-2,500 miles",
            examples: [
                "Cessna Citation CJ3+",
                "Embraer Phenom 300",
                "HondaJet Elite",
            ],
            features: [
                "Quick turnarounds",
                "Access to smaller airports",
                "Cost-effective",
            ],
            image: "/api/placeholder/400/300",
        },
        {
            name: "Mid-Size Jets",
            description: "Ideal for regional business travel",
            capacity: "6-8 passengers",
            range: "2,500-3,500 miles",
            examples: [
                "Cessna Citation Latitude",
                "Bombardier Challenger 350",
                "Gulfstream G280",
            ],
            features: [
                "Spacious cabin",
                "Transcontinental range",
                "Business amenities",
            ],
            image: "/api/placeholder/400/300",
        },
        {
            name: "Heavy Jets",
            description: "Premium comfort for long-distance travel",
            capacity: "8-12 passengers",
            range: "4,000-5,000 miles",
            examples: [
                "Gulfstream G650",
                "Bombardier Global 6000",
                "Dassault Falcon 8X",
            ],
            features: [
                "Luxury interiors",
                "Long-range capability",
                "Premium amenities",
            ],
            image: "/api/placeholder/400/300",
        },
        {
            name: "Ultra-Long Range",
            description: "The ultimate in private aviation luxury",
            capacity: "12-16 passengers",
            range: "6,000+ miles",
            examples: [
                "Gulfstream G700",
                "Bombardier Global 7500",
                "Boeing BBJ MAX",
            ],
            features: [
                "Intercontinental range",
                "Maximum comfort",
                "Executive suites",
            ],
            image: "/api/placeholder/400/300",
        },
    ];

    const fleetStats = [
        {
            number: "100+",
            label: "Partner Aircraft",
            icon: Plane,
        },
        {
            number: "50+",
            label: "Partner Operators",
            icon: Users,
        },
        {
            number: "24/7",
            label: "Availability",
            icon: Clock,
        },
        {
            number: "100%",
            label: "Safety Record",
            icon: Shield,
        },
    ];

    return (
        <div className="min-h-screen bg-lightBg">
            

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
                                Our{" "}
                                <span className="gradient-text">
                                    Premium Fleet
                                </span>
                            </h1>
                            <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
                                Access a carefully curated network of luxury
                                private jets from the world's most trusted
                                operators. Every aircraft meets our stringent
                                standards for safety, comfort, and reliability.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Fleet Stats */}
                <section className="section-padding bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {fleetStats.map((stat, index) => {
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

                {/* Aircraft Types */}
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
                                Aircraft Categories
                            </h2>
                            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
                                From nimble light jets to ultra-long-range
                                aircraft, we have the perfect aircraft for every
                                journey.
                            </p>
                        </motion.div>

                        <div className="space-y-16">
                            {aircraftTypes.map((aircraft, index) => (
                                <motion.div
                                    key={aircraft.name}
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
                                                <Plane className="w-24 h-24 text-primary mx-auto mb-4" />
                                                <p className="text-charcoal/60">
                                                    Aircraft Image
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                                    >
                                        <h3 className="text-3xl font-bold text-charcoal mb-4">
                                            {aircraft.name}
                                        </h3>
                                        <p className="text-lg text-charcoal/80 mb-6">
                                            {aircraft.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                                <div className="text-sm text-charcoal/60 mb-1">
                                                    Capacity
                                                </div>
                                                <div className="font-semibold text-charcoal">
                                                    {aircraft.capacity}
                                                </div>
                                            </div>
                                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                                <div className="text-sm text-charcoal/60 mb-1">
                                                    Range
                                                </div>
                                                <div className="font-semibold text-charcoal">
                                                    {aircraft.range}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-semibold text-charcoal mb-3">
                                                Popular Aircraft:
                                            </h4>
                                            <ul className="space-y-1">
                                                {aircraft.examples.map(
                                                    (example, exampleIndex) => (
                                                        <li
                                                            key={exampleIndex}
                                                            className="text-charcoal/80"
                                                        >
                                                            • {example}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {aircraft.features.map(
                                                (feature, featureIndex) => (
                                                    <span
                                                        key={featureIndex}
                                                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                                                    >
                                                        {feature}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Partner Airlines */}
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
                                Trusted Partner Operators
                            </h2>
                            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
                                We partner with the industry's most reputable
                                private jet operators to ensure the highest
                                standards of safety and service.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                "NetJets",
                                "Flexjet",
                                "VistaJet",
                                "XO",
                                "Wheels Up",
                                "JetSuite",
                                "JSX",
                                "Surf Air",
                            ].map((operator, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-lg p-6 shadow-sm text-center hover:shadow-md transition-shadow"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-3"></div>
                                    <h3 className="font-semibold text-charcoal">
                                        {operator}
                                    </h3>
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
                                Ready to Fly in Style?
                            </h2>
                            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                                Join our waitlist to access our premium fleet
                                and experience luxury travel like never before.
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
};

export default Fleet;
