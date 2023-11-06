import Link from "next/link";
import { Button } from "@/ui/atoms/Button";

export default async function ProductNotFound() {
	return (
		<div className="h-80 flex flex-col items-center justify-center">
			<h1>{`This product dosen't exist`}</h1>
			<Link href="/products" className="mt-10">
				<Button>Back to the products</Button>
			</Link>
		</div>
	);
}
