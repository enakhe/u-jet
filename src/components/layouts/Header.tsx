"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { Plane } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navigation = [
        {
            name: "Memberships",
            href: "/memberships",
        },
        {
            name: "Fleet",
            href: "/fleet",
        },
        {
            name: "Experiences",
            href: "/experience",
        },
        {
            name: "Contact",
            href: "/contact",
        },
    ];

    return (
        <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-charcoal/95 shadow-md' : 'bg-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="UJET"
                                height={32}
                                className="h-8"
                            />
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-10">
                        {navigation.map(item => (
                            <Link
                                href={item.href}
                                key={item.name}
                                className="text-sm text-charcoal font-semibold hover:text-primary transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="mx-2 lg:mx-0">
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

export default Header;
