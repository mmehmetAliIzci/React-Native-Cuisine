import {REQUEST_DISHES,REQUEST_DISHES_SUCCESS,REQUEST_DISHES_FAILURE,SELECT_DISH, UPDATE_FILTERED_LIST} from '../constants/actionTypes';
import mock from '../mock.json'
export const requestDishes = () => ({
	type: REQUEST_DISHES
})

export const requestDishesSuccess = (json) => ({
	type: REQUEST_DISHES_SUCCESS,
	dishList: json.results
})

export const requestDishesEror = (error) => ({
	type: REQUEST_DISHES_FAILURE,
	error
})

export const updateFilteredList = ( results ) => ({
	type: UPDATE_FILTERED_LIST,
	dishList: results
})

export const selectDish = (dish) => ({
  type: SELECT_DISH,
  dish
})

export function fetchDishes (){
	return (dispatch) => {
		dispatch(requestDishes())
		// fetch(`https://randomuser.me/api/?results=20`)
		fetch(`http://172.20.10.2:8099/dishes`)
		.then(response => response.json())
		.then(json => dispatch(requestDishesSuccess(mock)))
		.catch((error) => {
			dispatch(requestDishesEror(error))
		})
	}
}dispatch => {

}
