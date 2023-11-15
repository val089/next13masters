import { ActiveLink } from "../atoms";

type PaginationProps = {
	numberOfPages: number;
};

export const Pagination = ({ numberOfPages }: PaginationProps) => {
	const pages = new Array(numberOfPages).fill(0);
	return (
		<>
			<nav>
				<ul
					aria-label="pagination"
					className="flex justify-center space-x-2"
				>
					{pages.map((_, index) => {
						return (
							<li key={index}>
								<ActiveLink href={`/products/${index + 1}`}>
									{String(index + 1)}
								</ActiveLink>
							</li>
						);
					})}
				</ul>
			</nav>

			<nav aria-label="pagination">
				<ul className="flex h-8 items-center justify-center -space-x-px text-sm ">
					<li>
						<a
							href="#"
							className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>
							<span className="sr-only">Previous</span>
							<svg
								className="h-2.5 w-2.5 rtl:rotate-180"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 6 10"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 1 1 5l4 4"
								/>
							</svg>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>
							1
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>
							2
						</a>
					</li>
					<li>
						<a
							href="#"
							aria-current="page"
							className="z-10 flex h-8 items-center justify-center border border-blue-300 bg-blue-50 px-3 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
						>
							3
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>
							4
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>
							5
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>
							<span className="sr-only">Next</span>
							<svg
								className="h-2.5 w-2.5 rtl:rotate-180"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 6 10"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 9 4-4-4-4"
								/>
							</svg>
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};
