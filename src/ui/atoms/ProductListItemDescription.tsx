import { type ProductListItemFragment } from "@/gql/graphql";
// import { type ProductItem } from "@/types";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { price, categories, name },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-4">
			<h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
				{categories?.map((category) => category.name)}
			</h3>
			<h2 className="title-font text-lg font-medium text-gray-900">
				{name}
			</h2>
			<p className="mt-1 text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>{" "}
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};
