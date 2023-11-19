"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../atoms/Button";

export const AddToCartButton = () => {
	const { pending } = useFormStatus();
	return (
		<Button
			type="submit"
			disabled={pending}
			className="disabled:cursor-wait disabled:bg-gray-400 disabled:hover:bg-gray-400"
		>
			Add to cart
		</Button>
	);
};
