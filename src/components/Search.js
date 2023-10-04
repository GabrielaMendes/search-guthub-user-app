import { useRef } from "react";

export default function Search({ onSearchUser, notFound = false }) {
	const inputEl = useRef(null);

	return (
		<form className="card shadow-strong mt-10 p-2 flex items-center gap-5 max-sm:gap-3">
			<img src="./images/icon-search.svg" alt="search icon" className="ml-5" />

			<input
				ref={inputEl}
				type="text"
				placeholder="Search GitHub username…"
				className="grow caret-primary-blue focus:outline-none"
			/>

			{notFound && <span className="font-bold text-error-red">No results</span>}

			<button
				onClick={onSearchUser}
				className="py-3.5 px-6 rounded-lg bg-primary-blue hover:bg-secondary-blue text-off-white dark:text-white text-[1rem] font-bold"
			>
				Search
			</button>
		</form>
	);
}
