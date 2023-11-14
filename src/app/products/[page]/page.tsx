import { ProductList } from "@/components/organisms/ProductList";
import {
	// getProducts,
	getProductsGraphql,
} from "@/api/products";

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
	// const products = await getProducts(params.page);
	console.log(params);
	const products = await getProductsGraphql(params.page);

	return <ProductList products={products} />;
}
