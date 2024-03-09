import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>octy</title>
			</head>

			<body>
				<div className="container">{children}</div>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
