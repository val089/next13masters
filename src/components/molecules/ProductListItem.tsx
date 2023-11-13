import Link from "next/link";
import { ProductCoverImage } from "@/components/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/components/atoms/ProductListItemDescription";
// import { type ProductItem } from "@/types";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	const imageUrl =
		!!product.images?.length && product.images[0]?.url
			? product.images[0].url
			: "";
	return (
		<li className="w-full p-4 md:w-1/2 lg:w-1/4">
			<Link href={`/product/${product.id}`} key={product.id}>
				<article>
					<ProductCoverImage src={imageUrl} alt="title" />
					<ProductListItemDescription {...{ product }} />
				</article>
			</Link>
		</li>
	);
};
