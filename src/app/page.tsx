import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProducts } from "@/api/products";

export default async function Home() {
	const products = await getProducts();

	return (
		<div>
			<h2>HOME PAGE</h2>

			<ProductCounter />

			<ProductList products={products} />
		</div>
	);
}
