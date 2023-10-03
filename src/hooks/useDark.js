import { useState, useEffect } from "react";

export function useDark() {
	const [theme, setTheme] = useState(() => {
		if (localStorage.theme) return localStorage.theme;

		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	});

	const colorTheme = theme === "dark" ? "light" : "dark";

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme, colorTheme]);

	return { colorTheme, setTheme };
}
