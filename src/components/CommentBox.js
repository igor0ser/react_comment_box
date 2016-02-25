import React from 'react';
import CommentFormContainer from 'components/CommentForm';
import CommentListContainer from 'components/CommentList';


class CommentBox extends React.Component {
	render() {
		return (
			<div className='commentBox' >
				<h1>Comments</h1>
				<CommentListContainer />
				<CommentFormContainer />
			</div>
		);
	}
}

export default CommentBox;