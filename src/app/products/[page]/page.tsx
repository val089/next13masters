import { ProductList } from "@/ui/organisms/ProductList";
import { getProducts } from "@/api/products";

// export const generateStaticParams = async ({
// 	params,
// }: {
// 	params: { page: number };
// }) => {
// 	const products = await getProducts(params.page);
// 	// generujemy dwie statyczne strony produktu
// 	return products.slice(0, 2);
// 	// dzięki statycznym stronom będzie mniej uderzeń do bazy danych
// };

export default async function Products({
	params,
}: {
	params: { page: number };
}) {
	const products = await getProducts(params.page);

	return <ProductList products={products} />;
}
