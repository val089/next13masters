import { type ProductListItemFragment } from "@/gql/graphql";
// import { type ProductItem } from "@/types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

type ProductListProps = {
	products: ProductListItemFragment[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul data-testid="products-list" className="-m-4 flex flex-wrap">
			{products.map((product) => (
				<ProductListItem key={product.id} {...{ product }} />
			))}
		</ul>
	);
};
