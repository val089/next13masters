import { getProductsByCollectionSlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CollectionDetailsPage({
	params,
}: {
	params: { collection: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const collections = await getProductsByCollectionSlug(
		params.collection,
	);

	const products = collections[0]?.products;
	return (
		<section>
			<h1 className="py-20 text-4xl font-bold">
				{collections[0]?.name}
			</h1>
			{products && <ProductList products={products} />}
		</section>
	);
}
