import React, { useState } from "react";
import Lights from "./lights.jsx";
import Button from "react-bootstrap/Button";

//create your first component
const Home = () => {
	const [color, setColor] = useState({
		red: "",
		yellow: "",
		green: "",
		purple: "",
	});

	const HandleClick = (event) => {
		const newColors = {
			[event.target.id]: `selected-${event.target.id}`,
		};
		setColor(newColors);
	};

	const [displayToggle, setDisplayToggle] = useState("d-none");
	const displayPurple = () => {
		setDisplayToggle(displayToggle == "d-none" ? "block" : "d-none");
	};

	const [cycle, setCycle] = useState({
		red: "",
		yellow: "",
		green: "",
		purple: "",
	});

	const toggleCycle = () => {
		let i = 0;
		setInterval(() => {
			const colors = Object.keys(cycle);
			cycle[colors[i]] = `selected-${colors[i]}`;
			if (i > 0) {
				cycle[colors[i - 1]] = "";
				i == 3 ? (i = 0) : i++;
			} else if (i == 0) {
				cycle[colors[3]] = "";
				i++;
			}
			console.log(cycle);
			setCycle(cycle);
		}, 1000);
	};

	return (
		<div className="container-fluid d-flex flex-column align-items-center">
			<div className="TrafficHead"></div>
			<div
				id="trafficLight"
				onClick={HandleClick}
				className="TrafficBody p-4">
				<Lights color="red" class={color.red} cycleClass={cycle.red} />
				<Lights
					color="yellow"
					class={color.yellow}
					cycleClass={cycle.yellow}
				/>
				<Lights
					color="green"
					class={color.green}
					cycleClass={cycle.green}
				/>
				<Lights
					color="purple"
					class={color.purple}
					cycleClass={cycle.purple}
					display={displayToggle}></Lights>
			</div>
			<div className="m-4">
				<Button onClick={displayPurple} variant="outline-secondary">
					Add Purple
				</Button>{" "}
				<Button onClick={toggleCycle} variant="outline-secondary">
					Cycle Lights
				</Button>
			</div>
		</div>
	);
};

export default Home;
