import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
			<body className={inter.className}>
				<header className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					<nav>
						<ul aria-label="menu" className="flex">
							<li className="p-2">
								<Link href="/products">Products</Link>
							</li>
							<li className="p-2">
								<Link href="/private-policy">Private policy</Link>
							</li>
							<li className="p-2">
								<Link href="/regulations">Regulations</Link>
							</li>
						</ul>
					</nav>
				</header>
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer className="text-center text-gray-500">
					&copy; Kurs Next Masters 2023
				</footer>
			</body>
		</html>
	);
}
