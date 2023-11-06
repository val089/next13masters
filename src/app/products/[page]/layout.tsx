import { Pagination } from "@/ui/molecules/Pagination";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<section className="container mx-auto px-5 py-24">
				{children}
			</section>
			<Pagination numberOfPages={10} />
		</section>
	);
}
