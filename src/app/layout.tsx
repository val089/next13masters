import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/molecules/Footer";
import { Header } from "@/components/molecules/Header";

const inter = Poppins({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"],
});

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
