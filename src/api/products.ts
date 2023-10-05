import { type ProductItem } from "@/types";

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
		`https://naszsklep-api.vercel.app/api/products?take=${take}${
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
