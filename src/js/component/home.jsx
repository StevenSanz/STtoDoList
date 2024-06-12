import React from "react";
import { Todolist } from "../Todolist.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1>TODOS</h1>
			<Todolist />
		</div>
	);
}

export default Home;
