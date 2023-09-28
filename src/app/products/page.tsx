import { ProductList } from "@/ui/organisms/ProductList";
import { getProducts } from "@/api/products";

export default async function Products() {
	const products = await getProducts();

	return <ProductList products={products} />;
}
