import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [user, setUser] = useState(null)

  function handleSearchUser() {}

	return (
		<div className="w-full max-w-[780px] p-6">
			<Header />
			<Search onSearchUser={handleSearchUser} />
		</div>
	);
}

export default App;
