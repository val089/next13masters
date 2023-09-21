import type { Product } from "@/types";
import { ProductList } from "@/ui/organisms/ProductList";

const products: Product[] = [
	{
		id: "1a",
		name: "Kubek 1",
		category: "kategoria",
		price: 147,
		coverImage: {
			src: "https://picsum.photos/200/300?random=1",
			alt: "kubek 1",
		},
	},
	{
		id: "2b",
		name: "Kubek 2",
		category: "kategoria",
		price: 220,
		coverImage: {
			src: "https://picsum.photos/200/300?random=2",
			alt: "kubek 2",
		},
	},
	{
		id: "3c",
		name: "Kubek 3",
		category: "kategoria",
		price: 349,
		coverImage: {
			src: "https://picsum.photos/200/300?random=1",
			alt: "kubek 3",
		},
	},
	{
		id: "4d",
		name: "Kubek 4",
		category: "kategoria",
		price: 656,
		coverImage: {
			src: "https://picsum.photos/200/300?random=1",
			alt: "kubek 4",
		},
	},
];

export default function Products() {
	return <ProductList products={products} />;
}
