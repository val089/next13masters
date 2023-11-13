"use client";
import { useCallback } from "react";
import {
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";
import { type Route } from "next";
import { type VariantsType } from "@/types";

type VariantsProps = {
	variants: VariantsType;
};

export const ProductSize = ({ variants }: VariantsProps) => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	// mozna uzyć tez komponentu Link, tylko nie w select. Z Link najłatwiej
	return (
		<div className="ml-6 flex items-center">
			<span className="mr-3">Size</span>
			<div className="relative">
				<select
					className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
					value={searchParams.get("size") || "Choose size"}
					onChange={(e) =>
						router.push(
							`${pathname}?${createQueryString(
								"size",
								e.target.value,
							)}` as Route,
						)
					}
				>
					<option disabled>Choose size</option>
					{variants.map((variant) => {
						if ("size" in variant) {
							return <option key={variant.id}>{variant.size}</option>;
						} else {
							return null;
						}
					})}
				</select>
				<span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
					<svg
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="h-4 w-4"
						viewBox="0 0 24 24"
					>
						<path d="M6 9l6 6 6-6"></path>
					</svg>
				</span>
			</div>
		</div>
	);
};
