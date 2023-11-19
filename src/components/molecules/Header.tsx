"use client";

import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "../atoms";
import { SearchBar } from "./SearchBar";

export const Header = () => {
	return (
		<header className="body-font text-gray-600">
			<div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
				<a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
						viewBox="0 0 24 24"
					>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span className="ml-3 text-xl">Tailblocks</span>
				</a>
				<SearchBar />
				<nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
					<ul
						aria-label="menu"
						className="flex flex-wrap items-center justify-center space-x-4 text-base md:ml-auto"
					>
						<li>
							<ActiveLink
								href="/"
								className="mr-5 hover:text-blue-600"
								activeClassName="text-blue-600"
							>
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								exact={false}
								href="/products"
								className="mr-5 hover:text-blue-600"
								activeClassName="text-blue-600"
							>
								All
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								exact={false}
								href="/categories"
								className="mr-5 hover:text-blue-600"
								activeClassName="text-blue-600"
							>
								Categories
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								exact={false}
								href="/collections"
								className="mr-5 hover:text-blue-600"
								activeClassName="text-blue-600"
							>
								Collections
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								href="/private-policy"
								className="mr-5 hover:text-blue-600"
								activeClassName="text-blue-600"
							>
								Private policy
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								href="/regulations"
								className="mr-5 hover:text-blue-600"
								activeClassName="text-blue-600"
							>
								Regulations
							</ActiveLink>
						</li>
					</ul>
				</nav>
				<ShoppingCart />
			</div>
		</header>
	);
};
