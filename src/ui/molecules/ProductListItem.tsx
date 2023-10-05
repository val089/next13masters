import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductItem } from "@/types";

type ProductListItemProps = {
	product: ProductItem;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`} key={product.id}>
				<article>
					<ProductCoverImage src={product.image} alt="title" />
					<ProductListItemDescription {...{ product }} />
				</article>
			</Link>
		</li>
	);
};
