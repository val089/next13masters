import Link from "next/link";
import { type ProductItem } from "@/types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

type ProductListProps = {
	products: ProductItem[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{products.map((product) => (
				<Link href={`/product/${product.id}`} key={product.id}>
					<ProductListItem {...{ product }} />
				</Link>
			))}
		</ul>
	);
};
