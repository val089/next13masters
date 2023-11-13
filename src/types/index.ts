import {
	type SingleProductColorVariantFragment,
	type SingleProductSizeColorVariantFragment,
	type SingleProductSizeVariantFragment,
} from "@/gql/graphql";

// typowo odpowiedź z graphql'a
export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export type ProductItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

export type Rating = {
	rate: number;
	count: number;
};

export type VariantsType =
	| SingleProductColorVariantFragment[]
	| SingleProductSizeColorVariantFragment[]
	| SingleProductSizeVariantFragment[];
