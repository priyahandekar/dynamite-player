import React from "react";

const Button = ({ name }) => {
	return (
		<div>
			<button className="px-4 py-2 m-1 bg-gray-200 rounded-3xl">{name}</button>
		</div>
	);
};

export default Button;
