import React from 'react';
import { connect } from 'react-redux';
import addComment from 'actions/addComment';

var CommentForm = function(obj){
	var authorInput;
	var textInput;

	function submitHandler(e){
		e.preventDefault();
		obj.onCommentSubmit(authorInput.value, textInput.value);
		authorInput.value = '';
		textInput.value = '';
	}
	function refToAuthor(node){
		authorInput = node;
	}
	function refToText(node){
		textInput = node;
	}

	return (
		<form className='commentForm' onSubmit={submitHandler}>
			<input
				type='text'
				placeholder='Your name'
				ref = {refToAuthor}
			/>
			<input
				type='text'
				placeholder='Say something...'
				ref = {refToText}
			/>
			<input type='submit' value='Post' />
		</form>
	);
};

var mapDispatchToCommentFormProps = function(dispatch){
	return {
		onCommentSubmit: function(author, text){
			dispatch(addComment({
				author,
				text
			}))
		}
	};
}

var CommentFormContainer = connect(null, mapDispatchToCommentFormProps)(CommentForm);


export default CommentFormContainer;