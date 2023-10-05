import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ActiveLink } from "@/ui/atoms";

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
				<header>
					<nav>
						<ul
							aria-label="menu"
							className="mt-2 flex justify-center space-x-4"
						>
							<li>
								<ActiveLink href="/">Home</ActiveLink>
							</li>
							<li>
								<ActiveLink exact={false} href="/products">
									All
								</ActiveLink>
							</li>
							{/* <li>
								<ActiveLink href="/private-policy">
									Private policy
								</ActiveLink>
							</li>
							<li>
								<ActiveLink href="/regulations">
									Regulations
								</ActiveLink>
							</li> */}
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
