import { ProductList } from "./ProductList";
import { getProductsGraphql } from "@/api/products";

const sleep = (ms: number) =>
	new Promise((reslove) => setTimeout(reslove, ms));

export const SuggestedProducts = async () => {
	// const products = await getProducts();
	const products = await getProductsGraphql();
	await sleep(5000);

	return (
		<ProductList
			products={products.slice(-4)}
			testId="related-products"
		/>
	);
};
