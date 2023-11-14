import { ProductList } from "./ProductList";
import { getSuggestedProducts } from "@/api/products";

const sleep = (ms: number) =>
	new Promise((reslove) => setTimeout(reslove, ms));

type SuggestedProductsProps = {
	categorySlug: string | undefined;
	productId: string;
};

export const SuggestedProducts = async ({
	categorySlug,
	productId,
}: SuggestedProductsProps) => {
	if (!categorySlug) {
		return null;
	}

	const products = await getSuggestedProducts(
		categorySlug,
		productId,
	);
	await sleep(5000);

	if (!products) {
		return (
			<h2 className="text-4xl">There is no related products.</h2>
		);
	}

	return (
		<ProductList products={products} testId="related-products" />
	);
};
