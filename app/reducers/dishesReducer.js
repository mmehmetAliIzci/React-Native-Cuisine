import {REQUEST_DISHES,REQUEST_DISHES_SUCCESS,REQUEST_DISHES_FAILURE,SELECT_DISH,UPDATE_FILTERED_LIST} from '../constants/actionTypes';

const INITIAL_EVENT_STATE = {
	selectedDish: {},
	error : null,
	dishList: [],
	filteredList: [],
	isFetching: false
}

export default function eventReducer(state = INITIAL_EVENT_STATE, action){
	switch (action.type) {
		case REQUEST_DISHES:
			return {
				...state,
				isFetching: true
			}
		case REQUEST_DISHES_SUCCESS:
			return {
				...state,
				isFetching: false,
				dishList: action.dishList,
				filteredList: action.dishList
			}
		case UPDATE_FILTERED_LIST:
			return {
				...state,
				filteredList: action.dishList
			}
		case REQUEST_DISHES_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			}
		case SELECT_DISH:
			return {
				...state,
				selectedDish: action.dish
			}
		default:
			return state
	}
}
