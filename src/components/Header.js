import React, { useEffect, useState } from "react";
import { MdMenu, MdSearch } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { toggleMenu } from "../slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../slices/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const searchCache = useSelector((store) => store.search);
	const dispatch = useDispatch();

	/**
	 * {
	 * 		"iphone": ["iphone12", "iphone"],
	 * 		"flag": ["india flag", "flag of russia"]
	 * }
	 */
	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchCache[searchQuery]) {
				setSuggestions(searchCache[searchQuery]);
			} else getSearchSuggestions();
		}, 200);
		return () => clearTimeout(timer);
	}, [searchQuery]);

	const getSearchSuggestions = async () => {
		const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
		const json = await data.json();
		setSuggestions(json[1]);

		// update cache
		dispatch(cacheResults({ [searchQuery]: json[1] }));
	};
	const toggleHandleMenu = () => {
		dispatch(toggleMenu());
	};
	return (
		<div className="grid grid-flow-col p-3 m-2 shadow-lg">
			<div className="flex col-span-1">
				<MdMenu
					className="h-8 cursor-pointer"
					onClick={() => toggleHandleMenu()}
				/>
				<a href="/">
					<img
						className="h-8 mx-2"
						width="150px"
						alt="youtube-logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
					/>
				</a>
			</div>
			<div className="col-span-10 px-10">
				<div>
					<input
						className="w-1/2 px-5 border border-gray-400 p-2 rounded-l-full"
						type="text"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onFocus={() => setShowSuggestions(true)}
						// onBlur={() => setShowSuggestions(false)}
					/>
					<button className="rounded-r-full px-5 py-2 border bg-gray-100 border-gray-400">
						{/* <MdSearch /> */}🔍
					</button>
				</div>
				{showSuggestions && suggestions.length > 0 && (
					<div className="absolute top-10 rounded-lg border-gray-900 bg-white hover:bg-gray-400-200 w-96 shadow-lg py-2">
						{suggestions.map((sug) => (
							<Link key={sug} to="/results" state={{ searchedQuery: sug }}>
								<li className="flex px-3 items-center shadow-sm py-2 hover:bg-gray-100">
									<MdSearch /> <span className="px-2">{sug}</span>
								</li>
							</Link>
						))}
					</div>
				)}
			</div>
			<div className="col-span-1">
				<BsPersonCircle className="h-8" />
			</div>
		</div>
	);
};

export default Header;

{
	/* <ul className="absolute top-10 rounded-lg border-gray-900 bg-white hover:bg-gray-400-200 w-96 shadow-lg py-2">
						{suggestions.map((item) => {
							console.log(item);
							return (
								<form>
									<Link
										key={item}
										to="/results"
										state={{ searchedQuery: item }}
										onClick={(e) => {
											e.stopPropagation();
											e.preventDefault();
											setSearchQuery("");
										}}
										className="flex items-center pt-3 px-5 hover:bg-gray-50 font-semibold text-slate-700"
									>
										{/* <img src={MaginfierIcon} alt="maginfierIcon" className='h-5 w-5 mr-4' /> */
}
// 					{item}
// 				</Link>
// 			</form>
// 		);
// 	})}
// </ul> */}
