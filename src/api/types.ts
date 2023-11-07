export type ProductItemGraphql = {
	id: string;
	name: string;
	images: { url: string }[];
	price: number;
	description: string;
};

export type ProductsGraphqlResponse = {
	products: ProductItemGraphql[];
};
