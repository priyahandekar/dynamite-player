import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const Body = () => {
	return (
		<>
			<Header />
			<main className="flex flex-row h-[calc(100vh-50px)]">
				<SideBar />
				<Outlet />
			</main>
		</>
	);
};

export default Body;
// <div className="flex flex-col">
// 			<div><Header /></div>
// 			<div className="flex">
// 				<SideBar />
// 				<Outlet />
// 			</div>
// 		</div>
