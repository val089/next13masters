import NextImage from "next/image";
import Link from "next/link";
import { getCollectionsGraphql } from "@/api/collections";

export default async function Collections() {
	const collections = await getCollectionsGraphql();

	return (
		<section className="body-font text-gray-600">
			<div className="container mx-auto px-5 py-24">
				<div className="-m-4 flex flex-wrap">
					{collections.map(({ image, name, description, slug }) => (
						<div className="p-4 md:w-1/3" key={slug}>
							<Link href={`/collections/${slug}`}>
								<div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
									<NextImage
										className="w-full object-cover object-center md:h-36 lg:h-48"
										src={image.url}
										alt="blog"
										width={300}
										height={300}
									/>
									<div className="p-6">
										<h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
											COLLECTION
										</h2>
										<h1 className="title-font mb-3 text-lg font-medium text-gray-900">
											{name}
										</h1>
										<p className="mb-3 leading-relaxed">
											{description}
										</p>
										<div className="flex flex-wrap items-center ">
											<a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
												See more
												<svg
													className="ml-2 h-4 w-4"
													viewBox="0 0 24 24"
													stroke="currentColor"
													stroke-width="2"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<path d="M5 12h14"></path>
													<path d="M12 5l7 7-7 7"></path>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
