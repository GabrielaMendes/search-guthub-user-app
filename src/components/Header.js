import ColorTheme from "./ColorTheme";

export default function Header() {
	return (
		<header className="w-full flex items-center justify-between">
			<h1>devfinder</h1>
			<ColorTheme />
		</header>
	);
}
