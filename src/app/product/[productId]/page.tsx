import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import {
	// getProductById,
	getProductByIdGraphql,
	// getProducts,
} from "@/api/products";
// import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { SuggestedProducts } from "@/components/organisms/SuggestedProducts";
import { ProductDetails } from "@/components/organisms/ProductDetails";

// nie musimy się przejmować ilością wywołań pobierania produktów, bo na serwerze pobierane są tylko raz
// generujemy statyczne ściezki produktów, jeśl w cms ktoś np zmieni cene to trzeba zrobić build

// export const generateStaticParams = async () => {
// 	const products = await getProducts();
// 	// generujemy dwie statyczne strony produktu
// 	// return products.map(({ id }) => ({ productId: id })).slice(0, 2);

// 	// generujemy wszystkie strony produktu jako statyczne
// 	return products.map(({ id }) => ({ productId: id }));

// 	// dzięki statycznym stronom będzie mniej uderzeń do bazy danych
// };

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const { productId } = params;
	const product = await getProductByIdGraphql(productId);

	if (!product) {
		notFound();
	}

	return {
		title: `${product.name}`,
		description: `${product.description}`,
		// openGraph pozwala na wyświetlenie obrazka, tytułu, opisu itd. jeśli np wkleimy link do produktu na facebooku
		openGraph: {
			title: `${product.name}`,
			description: `${product.description}`,
			images: [
				{
					url: product.images[0]?.url || "",
				},
			],
		},
	};
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

	// const product = await getProductById(productId);
	const product = await getProductByIdGraphql(productId);

	if (!product) {
		return null;
	}

	const categorySlug = product.categories[0]?.slug;

	return (
		<div>
			<p>REFERRAL: {referral}</p>
			<ProductDetails {...{ product }} />
			<aside>
				{/* dajemy suspense bo chcemy zobaczyć jak najszybciej szczegóły produktu, ale sugerowane produkty mogę być później załadowane */}
				<Suspense fallback="Loading...">
					<SuggestedProducts {...{ productId, categorySlug }} />
				</Suspense>
			</aside>
		</div>
		// <div>
		// 	<article className="max-w-xs">
		// 		<h1>{product.title}</h1>
		// 		{params.productId}
		// 		<p>REFERRAL: {referral}</p>
		// 		<div className="w-60">
		// 			<ProductCoverImage
		// 				src={product.image}
		// 				alt={product.title}
		// 			/>
		// 		</div>
		// 		<p>{product.description}</p>
		// 	</article>
		// <aside>
		// 	{/* dajemy suspense bo chcemy zobaczyć jak najszybciej szczegóły produktu, ale sugerowane produkty mogę być później załadowane */}
		// 	<Suspense fallback="Loading...">
		// 		<SuggestedProducts />
		// 	</Suspense>
		// </aside>
		// </div>
	);
}
