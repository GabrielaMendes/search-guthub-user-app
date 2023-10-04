import { useRef } from "react";

export default function Search({ onSearchUser, notFound = false }) {
	const inputEl = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    onSearchUser()
  }

	return (
		<form className="card shadow-strong mt-10 p-2 flex items-center gap-5 max-sm:gap-3">
			<img src="./images/icon-search.svg" alt="search icon" className="ml-5 max-sm:ml-4" />

			<input
				ref={inputEl}
				type="text"
				placeholder="Search GitHub username…"
				className="bg-inherit grow caret-primary-blue focus:outline-none"
			/>

			{notFound && <span className="font-bold text-error-red">No results</span>}

			<button
				onClick={(e) => handleSubmit(e)}
				className="py-3.5 px-6 max-sm:px-4 rounded-lg bg-primary-blue hover:bg-secondary-blue text-off-white dark:text-white text-lg max-sm:text-[0.875rem] font-bold"
			>
				Search
			</button>
		</form>
	);
}
