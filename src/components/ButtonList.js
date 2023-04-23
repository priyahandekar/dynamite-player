import React from "react";
import Button from "./Button";

const list = [
	"All",
	"News",
	"Cricket",
	"Gaming",
	"Cooking",
	"Live",
	"Songs",
	"Education",
	"Tourism",
	"Weddings",
	"Drama",
	"Javascript",
];
const ButtonList = () => {
	return (
		<div className="flex">
			{list.map((name, i) => (
				<Button key={i} name={name} />
			))}
		</div>
	);
};

export default ButtonList;
