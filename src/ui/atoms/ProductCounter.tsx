"use client";

import { useState } from "react";
// import { Test } from "./Test";
// import { useRouter } from "next/navigation";

export const ProductCounter = () => {
	const [counter, setCounter] = useState(0);

	// const router = useRouter(); // hooków uzywamy tylko w komponentach klienckich

	// useEffect(() => {
	// 	if (isLoggedIn) {
	// 		router.push("/dashboard");
	// 	}
	// }, [router]);

	return (
		<>
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
			{/* <Test /> */}
		</>
	);
};
