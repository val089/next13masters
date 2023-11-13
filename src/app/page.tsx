import { ProductCounter } from "@/components/atoms/ProductCounter";
import { ProductList } from "@/components/organisms/ProductList";
import {
	// getProducts,
	getProductsGraphql,
} from "@/api/products";

export default async function Home() {
	// const products = await getProducts();

	const products = await getProductsGraphql();

	return (
		<div>
			<h2>HOME PAGE</h2>

			<ProductCounter />

			<ProductList products={products} />
		</div>
	);
}
