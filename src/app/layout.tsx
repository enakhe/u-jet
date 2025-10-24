import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-montserrat",
});


export const metadata: Metadata = {
	title: "UJET | Luxury Travel, Now Within Reach",
	description:
		"U-Jet helps airlines list and fill empty leg return flights. Book affordable private or commercial return flights through our smart web and mobile platforms.",
	keywords:
		"empty leg flights, flight booking, private jet, return flight deals, U-Jet, affordable flights, airline efficiency",
	authors: [{ name: "Samuel Izuagbe" }],
	robots: "index, follow",
	openGraph: {
		title: "UJET | Luxury Travel, Now Within Reach",
		description:
			"U-Jet helps airlines list and fill empty leg return flights. Book affordable private or commercial return flights through our smart web and mobile platforms.",
		url: "https://www.ujetltd.com/",
		siteName: "UJET",
		locale: "en_US",
		type: "website",
	},
	icons: {
		icon: [
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [
			{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
		],
	},
	manifest: "/site.webmanifest",
	other: {
		"apple-mobile-web-app-capable": "yes",
		"mobile-web-app-capable": "yes",
		"msapplication-TileColor": "#004080",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
	themeColor: "#004080",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={montserrat.variable}>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
			</head>
			<body className="font-montserrat">{children}</body>
		</html>
	);
}
