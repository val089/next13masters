import { type ComponentProps } from "react";
import { useRouter } from "next/navigation";
import { debounce } from "lodash";

export const SearchInput = () => {
	const router = useRouter();

	const debounceSearch = debounce((query: string) => {
		router.replace(`/search?query=${query}`);
	}, 500);

	const handleChange: ComponentProps<"input">["onChange"] = (
		event,
	) => {
		debounceSearch(event.target.value);
	};

	return (
		<input
			type="search"
			onChange={handleChange}
			id="default-search"
			className="block w-full rounded-lg border border-gray-300 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
			placeholder="Search product"
			required
		/>
	);
};
