import { Pagination } from "@/ui/molecules/Pagination";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<section className="bg-teal-100 p-10">{children}</section>
			<Pagination numberOfPages={10} />
		</section>
	);
}
