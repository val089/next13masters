import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/ui/molecules/Footer";
import { Header } from "@/ui/molecules/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Home",
	description: "Home page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pl">
			<body
				className={
					inter.className &&
					"mx-auto max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-7xl"
				}
			>
				<Header />
				<section className="mx-auto">{children}</section>
				<Footer />
			</body>
		</html>
	);
}
