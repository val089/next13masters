import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type Product } from "@/types";

type ProductListItemProps = {
	product: Product;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription {...{ product }} />
			</article>
		</li>
	);
};
