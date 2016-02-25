import React from 'react';
import { connect } from 'react-redux';
import delComment from 'actions/delComment';

var Comment = function(props){
	var delHandler = function() {
		props.onDelete(props.reactKey);
	};

	return (
		<div className='comment'>
			<button className="del" onClick={delHandler}>
				x
			</button>
			<h2 className='commentAuthor'>
				{props.author}
			</h2>
			<em>{props.date}</em>
			{props.children}
		</div>
	);
};

var mapDispatchToComment = function(dispatch){
	return {
		onDelete: function(key){
			dispatch(delComment(key))
		}
	};
}

var CommentContainer = connect(null, mapDispatchToComment)(Comment);


export default CommentContainer;