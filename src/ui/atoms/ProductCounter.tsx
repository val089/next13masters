"use client";

import { useState } from "react";

export const ProductCounter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div className="flex">
			<button
				onClick={() => setCounter((prevState) => prevState - 1)}
				className="border border-slate-200 px-4"
			>
				-
			</button>
			<input
				readOnly
				value={counter}
				className="w-20 border border-slate-200 text-center"
			/>
			<button
				onClick={() => setCounter((prevState) => prevState + 1)}
				className="border border-slate-200 px-4"
			>
				+
			</button>
		</div>
	);
};
