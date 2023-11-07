import { getProductsGraphql } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Products() {
	// const products = await getProducts();
	const products = await getProductsGraphql();

	return <ProductList products={products} />;
}
