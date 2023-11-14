import { getProductsTotalCountGraphql } from "@/api/products";
import { Pagination } from "@/components/molecules/Pagination";
import { productsPerPage } from "@/utils";

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const productsCount = await getProductsTotalCountGraphql();
	const numberOfPages = Math.ceil(productsCount / productsPerPage);

	return (
		<section>
			<section className="container mx-auto px-5 py-24">
				{children}
			</section>
			<Pagination {...{ numberOfPages }} />
		</section>
	);
}
