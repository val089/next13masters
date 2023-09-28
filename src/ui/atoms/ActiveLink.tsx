"use client";

import Link, { type LinkProps } from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface ActiveLinkProps<RouteInferType>
	extends LinkProps<RouteInferType> {
	children: string;
}

export const ActiveLink = <RouteInferType,>({
	children,
	...rest
}: ActiveLinkProps<RouteInferType>) => {
	const pathname = usePathname();
	const isActive = pathname === rest.href;

	return (
		<Link
			className={clsx(
				"text-blue-400 hover:text-blue-600",
				isActive && "text-blue-600 underline",
			)}
			// className={clsx("text-blue-400 hover:text-blue-600", {
			// 	underline: isActive,
			// })}
			{...rest}
		>
			{children}
		</Link>
	);
};
