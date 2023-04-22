import React from "react";
import { MdMenu, MdSearch } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
const Header = () => {
	return (
		<div className="grid grid-flow-col p-5 m-2 shadow-lg">
			<div className="flex col-span-1">
				<MdMenu className="h-8" />
				<img
					className="h-8 mx-2"
					width="150px"
					alt="youtube-logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
				/>
			</div>
			<div className="col-span-10 px-10">
				<input
					className="w-1/2 border border-gray-400 p-2 rounded-l-full"
					type="text"
				/>
				<button className="rounded-r-full px-5 py-2 border bg-gray-100 border-gray-400">
					{/* <MdSearch /> */}🔍
				</button>
			</div>
			<div className="col-span-1">
				<BsPersonCircle className="h-8" />
			</div>
		</div>
	);
};

export default Header;
