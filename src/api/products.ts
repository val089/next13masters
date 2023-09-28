import { type ProductItem } from "@/types";

export const getProducts = async () => {
	const res = await fetch(
		"https://naszsklep-api.vercel.app/api/products",
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
