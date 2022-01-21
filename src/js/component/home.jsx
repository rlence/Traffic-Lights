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
	const [displayToggle, setDisplayToggle] = useState("d-none");

	const handleClick = (event) => {
		const newColors = {
			[event.target.id]: `selected-${event.target.id}`,
		};
		setColor(newColors);
	};

	const [cycle, setCycle] = useState({
		red: "",
		yellow: "",
		green: "",
		purple: "",
	});

	const [listColors] = useState(Object.keys(color));

	const displayPurple = () => {
		setDisplayToggle(displayToggle == "d-none" ? "block" : "d-none");
	};

	let count = 0;

	const toggleCycle = () => {
		const interval = setInterval(() => {
			if (count === listColors.length - 1) {
				count = 0;
			} else {
				const colorName = listColors[count];
				setColor({ ...color, [colorName]: `selected-${colorName}` });
				count++;
			}
		}, 1000);
		return () => clearInterval(interval);
	};

	return (
		<div className="container-fluid d-flex flex-column align-items-center">
			<div className="TrafficHead"></div>
			<div
				id="trafficLight"
				onClick={handleClick}
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
