import { Suspense } from "react";
import { getProductById, getProducts } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

// nie musimy się przejmować ilością wywołań pobierania produktów, bo na serwerze pobierane są tylko raz
// generujemy statyczne ściezki produktów, jeśl w cms ktoś np zmieni cene to trzeba zrobić build

export const generateStaticParams = async () => {
	const products = await getProducts();
	// generujemy dwie statyczne strony produktu
	// return products.map(({ id }) => ({ productId: id })).slice(0, 2);

	// generujemy wszystkie strony produktu jako statyczne
	return products.map(({ id }) => ({ productId: id }));

	// dzięki statycznym stronom będzie mnie uderzeń do bazy danych
};

export default async function ProductDetailsPage({
	params,
	searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	// http://localhost:3000/products/1a?referral=text
	const referral = searchParams.referral?.toString();

	const { productId } = params;

	const product = await getProductById(productId);

	return (
		<div>
			<article className="max-w-xs">
				<h1>Produc Details Page</h1>
				{params.productId}
				<p>REFERRAL: {referral}</p>
				<div className="w-60">
					<ProductCoverImage
						src={product.image}
						alt={product.title}
					/>
				</div>
			</article>
			<aside>
				{/* dajemy suspense bo chcemy zobaczyć jak najszybciej szczegóły produktu, ale sugerowane produkty mogę być później załadowane */}
				<Suspense fallback="Loading...">
					<SuggestedProducts />
				</Suspense>
			</aside>
		</div>
	);
}