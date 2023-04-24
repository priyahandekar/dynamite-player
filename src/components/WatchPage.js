import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../slices/appSlice";
import CommentsContainer from "./nestedComments/CommentsContainer";

const WatchPage = () => {
	const [searchParams] = useSearchParams();
	const videoId = searchParams.get("v");
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	}, []);
	return (
		<div className="flex flex-col">
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
			<CommentsContainer />
		</div>
	);
};

export default WatchPage;
