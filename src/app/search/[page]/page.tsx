import { ProductList } from "@/components/organisms/ProductList";
import { getProductsGraphql } from "@/api/products";

type SearchProps = {
	params: {
		page: number;
	};
	searchParams: {
		query?: string;
	};
};

export default async function Search({
	params: { page },
	searchParams: { query },
}: SearchProps) {
	const products = await getProductsGraphql(page, query);

	return <ProductList products={products} />;
}
