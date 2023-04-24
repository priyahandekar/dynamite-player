import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
	return comments.map((comment) => <Comment key={comment.id} data={comment} />);
};

export default CommentList;
