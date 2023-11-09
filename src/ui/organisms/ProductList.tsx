import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

type ProductListProps = {
	products: ProductListItemFragment[];
	testId?: string;
};

export const ProductList = ({
	products,
	testId = "products-list",
}: ProductListProps) => {
	return (
		<ul data-testid={testId} className="-m-4 flex flex-wrap">
			{products.map((product) => (
				<ProductListItem key={product.id} {...{ product }} />
			))}
		</ul>
	);
};
