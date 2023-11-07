import { notFound } from "next/navigation";
import { type ComponentType } from "react";

export default async function StaticPage({
	params,
}: {
	params: { filename: string };
}) {
	const Page = await import(`./${params.filename}.mdx`).then(
		(module: { default: ComponentType }) => module.default,
		() => notFound(), //przekieruje nas do Page 404
	);

	// prose prose-lg - klasy z tailwindcss/typography
	return (
		<article className="prose prose-lg">
			<Page />
		</article>
	);
}
