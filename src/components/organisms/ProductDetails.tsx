import NextImage from "next/image";
import { cookies } from "next/headers";
import { Button } from "../atoms/Button";
import { ProductVariant } from "../atoms";
import { formatMoney } from "@/utils";
// import { type ProductItem } from "@/types";
import {
	CartCreateDocument,
	type CartFragment,
	CartGetByIdDocument,
	type ProductDetailsFragment,
	CartAddProductDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";
import { type VariantsType } from "@/types";
import { executeGraphql } from "@/api/graphqlApi";

type ProductDetailsProps = {
	product: ProductDetailsFragment;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
	/**
	 * - server actions mogą być wykonywane w client components
	 * - form i server actions zadziała nawet gdy jest wyłączona obsługa javascript w przeglądarce
	 * - mogę przekazać dane poprzez formData, a take mogę odwołać się do propsów w komponencie
	 * - dzięki formAction znacznie mniej są potrzebne biblioteki do formularzy(zwłaszcza do prostych formularzy), przy bardziej skomplikowanych zalecane są biblioteki
	 * - na serwerze nie wyciekną zadne API keys np. przez stripe bo wwszystko dzieje się na serwerze nie na cliencie
	 * */
	async function addtoCartAction(formData: FormData) {
		"use server";
		// console.log(product.id);
		console.log(formData);

		const cart = await getOrCreateCart();
		// to cookie dzieje się na serwerze i wysyła specjalny nagłówek; mozemy takze dodać ustawienia dla ciastek
		// dzięki ustawieniom mozemy zadbać o to zeby usunąć koszyk po jakimś czasie, a nie, ze ktoś po kilku miesiącach wejdzie i będzie miał dalej te koszyk
		cookies().set("cartId", cart.id, {
			httpOnly: true,
			sameSite: "lax",
			// secure: true //ciastka dostęone tylko przez https
		});
		await addtoCart(cart.id, product.id);
	}

	return (
		<section className="body-font overflow-hidden text-gray-600">
			<div className="container mx-auto px-5 py-24">
				<div className="mx-auto flex flex-wrap lg:w-4/5">
					<NextImage
						width={600}
						height={600}
						alt="ecommerce"
						className="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
						src={product.images[0]?.url || ""}
					/>
					<div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
						<h2 className="title-font text-sm tracking-widest text-gray-500">
							{product.categories.map((category) => category.name)}
						</h2>
						<h1 className="title-font mb-1 text-3xl font-medium text-gray-900">
							{product.name}
						</h1>
						<div className="mb-4 flex">
							<span className="flex items-center">
								<svg
									fill="currentColor"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-indigo-500"
									viewBox="0 0 24 24"
								>
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="currentColor"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-indigo-500"
									viewBox="0 0 24 24"
								>
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="currentColor"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-indigo-500"
									viewBox="0 0 24 24"
								>
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="currentColor"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-indigo-500"
									viewBox="0 0 24 24"
								>
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-indigo-500"
									viewBox="0 0 24 24"
								>
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<span className="ml-3 text-gray-600">4 Reviews</span>
							</span>
							<span className="space-x-2s ml-3 flex border-l-2 border-gray-200 py-2 pl-3">
								<a className="text-gray-500">
									<svg
										fill="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="h-5 w-5"
										viewBox="0 0 24 24"
									>
										<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
									</svg>
								</a>
								<a className="text-gray-500">
									<svg
										fill="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="h-5 w-5"
										viewBox="0 0 24 24"
									>
										<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
									</svg>
								</a>
								<a className="text-gray-500">
									<svg
										fill="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="h-5 w-5"
										viewBox="0 0 24 24"
									>
										<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
									</svg>
								</a>
							</span>
						</div>
						<p className="leading-relaxed">{product.description}</p>
						<div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
							<ProductVariant
								variants={product.variants as VariantsType}
							/>
						</div>
						<div className="flex">
							<span className="title-font text-2xl font-medium text-gray-900">
								{formatMoney(product.price / 100)}
							</span>
							<form action={addtoCartAction} className="ml-auto">
								<input
									type="hidden"
									name="productId"
									value={product.id}
								/>
								<Button type="submit">Add to cart</Button>
							</form>

							<button className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500">
								<svg
									fill="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-5 w-5"
									viewBox="0 0 24 24"
								>
									<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

async function getOrCreateCart(): Promise<CartFragment> {
	// cookie pobierane jest na serwerze
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getCartById(cartId);
		// sprawdzamy czy cart istnieje, bo moze tez zostać usunięty z serwera
		if (cart.order) {
			return cart.order;
		}
	}

	const { createOrder: newCart } = await createCart();
	if (!newCart) {
		throw new Error("Failed to create cart.");
	}
	cookies().set("cartId", newCart.id);
	return newCart;
}

async function getCartById(cartId: string) {
	return executeGraphql(CartGetByIdDocument, { cartId });
}

function createCart() {
	return executeGraphql(CartCreateDocument, {});
}

async function addtoCart(orderId: string, productId: string) {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: productId,
	});

	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql(CartAddProductDocument, {
		orderId,
		productId,
		total: product.price,
	});
}
