import React from 'react';
import { connect } from 'react-redux';
import CommentContainer from 'components/Comment';

var CommentList = function(obj){
	var commentNodes = obj.comments.map(function(comment){
		return (
			<CommentContainer key={comment.id} reactKey={comment.id} author={comment.author} date={comment.date}>
				{comment.text}
			</CommentContainer>
			);
	});

	return (
		<div className="commentList">
			{commentNodes}
		</div>
	);
}

var mapStateToCommentListProps = function(state){
	return {
		comments: state
	};
}

var CommentListContainer = connect(mapStateToCommentListProps)(CommentList);


export default CommentListContainer;