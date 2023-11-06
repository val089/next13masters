import { notFound } from "next/navigation";
import {
	executeGraphql,
	getProductsByCategorySlug,
} from "@/api/products";
import { ProductsGetByCategorySlugDocument } from "@/gql/graphql";
import { ProductItem } from "@/types";
import { ProductList } from "@/ui/organisms/ProductList";

// parametry, które zostały uzyte wyzej, mozemy uzyc jako argumenty
export const generateStaticParams = async ({
	params,
}: {
	params: { category: string };
}) => {
	const { category } = params;

	if (category === "t-shirts") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }];
	}
};

export default async function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const { category, pageNumber } = params;

	const products = await getProductsByCategorySlug(category);

	if (!products) {
		notFound();
	}

	return (
		<>
			<h1>
				Product from category: {category}, from page {pageNumber}
			</h1>
			<ProductList products={products} />
			{/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
		</>
	);
}
