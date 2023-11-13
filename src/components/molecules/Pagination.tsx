import { ActiveLink } from "../atoms";

type PaginationProps = {
	numberOfPages: number;
};

export const Pagination = ({ numberOfPages }: PaginationProps) => {
	const pages = new Array(numberOfPages).fill(0);
	return (
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
	);
};
