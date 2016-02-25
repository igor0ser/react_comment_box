import ls from 'stores/LocalStorage';
import {createStore} from 'redux';

var firstComment = [{
	author: 'Ололош',
	text: 'Первый нах!',
	date: new Date().toString().slice(3,24),
	id: new Date().getTime()
}];


var def = ls.get() || firstComment;

var reducer = function(state=def, action){

	switch (action.type) {
		case 'ADD_COMMENT':
			var newComment = {
				id: new Date().getTime(),
				date: new Date().toString().slice(3,24)
			};
			Object.assign(newComment, action.payload);
			var result = state.concat(newComment)
			ls.set(result);
			return result;

		case 'DEL_COMMENT':
			var res = state.filter(function(item){
				return item.id !== action.payload;
			});
			ls.set(result);
			return res;

		default:
			return state;
	}

};

var store = createStore(reducer);

export default store;