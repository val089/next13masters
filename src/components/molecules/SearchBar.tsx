import { SearchIcon } from "lucide-react";
import { SearchInput } from "../atoms";

export const SearchBar = () => {
	return (
		<form className="mx-10 flex-1">
			<label
				htmlFor="default-search"
				className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>
				Search
			</label>
			<div className="relative">
				<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
					<SearchIcon />
				</div>
				<SearchInput />
			</div>
		</form>
	);
};
