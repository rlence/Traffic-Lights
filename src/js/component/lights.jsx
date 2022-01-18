import React from "react";
import PropTypes from "prop-types";

const Lights = (props) => {
	return (
		<div
			id={props.color}
			className={`${props.color} light ${props.class} ${props.cycleClass} ${props.display}`}></div>
	);
};

Lights.propTypes = {
	color: PropTypes.string,
	class: PropTypes.string,
};

export default Lights;
