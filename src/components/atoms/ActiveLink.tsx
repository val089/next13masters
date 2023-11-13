"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type ActiveLinkProps<RouteInferType> = LinkProps<RouteInferType> & {
	children: string;
	exact?: boolean;
	activeClassName?: string;
};

export const ActiveLink = <RouteInferType,>({
	exact = true,
	children,
	className = "text-blue-400 hover:text-blue-600",
	activeClassName = "text-blue-600 underline",
	href,
	...rest
}: ActiveLinkProps<RouteInferType>) => {
	const pathname = usePathname();

	const path = typeof href === "string" ? href : href.pathname;

	const isActive =
		(path &&
			pathname &&
			(exact ? pathname === path : pathname.startsWith(path))) ||
		false;

	return (
		<Link
			// className={clsx("text-blue-400 hover:text-blue-600", {
			// 	underline: isActive,
			// })}
			{...rest}
			{...{ href }}
			className={clsx(className, isActive && activeClassName)}
			aria-current={isActive ? "page" : undefined}
			role="link"
		>
			{children}
		</Link>
	);
};
