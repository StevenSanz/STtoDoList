import React from "react";
import { Todolist } from "../Todolist.jsx";
import { Socialmedia } from "./Socialmedia.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-white">TODOS</h1>
			<Todolist />
			<Socialmedia />
		</div>
	);
}

export default Home;
