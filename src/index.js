require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';
import store from 'stores/CommentStore';
import CommentBox from 'components/CommentBox';
import {Provider} from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<CommentBox />
	</Provider>,
	document.getElementById('app')
);