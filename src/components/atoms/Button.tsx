import { type ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
	children,
	className = "",
	...rest
}: ButtonProps) => {
	return (
		<button
			className={clsx(
				"ml-auto flex rounded border-0 bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none",
				className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
};
