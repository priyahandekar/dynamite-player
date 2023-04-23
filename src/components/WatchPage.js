import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../slices/appSlice";

const WatchPage = () => {
	const [searchParams] = useSearchParams();
	const videoId = searchParams.get("v");
	console.log(searchParams.get("v"));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	}, []);
	return (
		<div className="px-5">
			<iframe
				width="950"
				height="500"
				src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default WatchPage;
