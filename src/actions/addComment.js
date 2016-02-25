var addComment = function(comment){
	return {
		type: 'ADD_COMMENT',
		payload: comment
	};
};

export default addComment;