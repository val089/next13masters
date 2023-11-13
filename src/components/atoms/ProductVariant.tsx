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

export const ProductVariant = ({ variants }: VariantsProps) => {
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

	if (!variants.length) {
		return null;
	}

	// mozna uzyć tez komponentu Link, tylko nie w select. Z Link najłatwiej
	return (
		<div className="flex items-center">
			<span className="mr-3">Size/Color</span>
			<div className="relative">
				<select
					className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
					value={searchParams.get("variant") || "Choose Size/Color"}
					onChange={(e) =>
						router.push(
							`${pathname}?${createQueryString(
								"variant",
								e.target.value,
							)}` as Route,
						)
					}
				>
					<option disabled>Choose Size/Color</option>
					{variants.map((variant) => (
						<option key={variant.id}>{variant.name}</option>
					))}
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
