import { executeGraphql } from "./graphqlApi";
import { type ProductItem } from "@/types";
import {
	ProductGetByIdDocument,
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";

const restApiUrl = "https://naszsklep-api.vercel.app/api";

export const getProducts = async (offset = 1, take = 10) => {
	// Przy offset 1 – zawsze pomijasz 1 produkt. Dla podstron np. 3,4,5 itd. Pomijasz 3,4 lub 5 (itd.) produktów. Musisz wyświetlić kolejne 10.
	/*
		dla /products/[page]
		offset policzysz   page*take
		a raczej jeszcze tak (trzeba wziac pod uwage 1 strone)   (page-1)*take
		wtedy dla 1 strony masz  0 * 10
		dla 2  masz  1 * 10
		itd
	*/
	const res = await fetch(
		`${restApiUrl}/products?take=${take}${
			offset ? `&offset=${(offset - 1) * take}` : ""
		}`,
	);
	const products = (await res.json()) as ProductItem[];

	return products;
};

export const getProductById = async (id: ProductItem["id"]) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const product = (await res.json()) as ProductItem;

	return product;
};

// dzięki server components nie musimy uzywać ApolloClient, dlatego uzywamy fetcha; ogranicza to znacznie liczbę paczek
export const getProductsGraphql = async (): Promise<
	ProductListItemFragment[]
> => {
	const graphqlResponse = await executeGraphql(
		ProductsGetListDocument,
		{},
	);

	// const products = graphqlResponse.products.map((product) => ({
	// 	id: product.id,
	// 	title: product.name,
	// 	price: product.price,
	// 	description: product.description,
	// 	category: product.categories[0]?.name || "",
	// 	rating: {
	// 		rate: 1,
	// 		count: 1,
	// 	},
	// 	image: product.images[0]?.url || "",
	// 	longDescription: "",
	// }));

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (
	categorySlug: string,
) => {
	const categories = await executeGraphql(
		ProductsGetByCategorySlugDocument,
		{ slug: categorySlug },
	);

	const products = categories.categories[0]?.products;

	return products?.map((product) => ({
		id: product.id,
		title: product.name,
		price: product.price,
		description: product.description,
		category: product.categories[0]?.name || "",
		rating: {
			rate: 1,
			count: 1,
		},
		image: product.images[0]?.url || "",
		longDescription: "",
	}));
};

export const getProductByIdGraphql = async (
	id: ProductListItemFragment["id"],
): Promise<ProductListItemFragment | null | undefined> => {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id,
	});

	return product;
};
