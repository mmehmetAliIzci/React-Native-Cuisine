import {REQUEST_DISHES,REQUEST_DISHES_SUCCESS,REQUEST_DISHES_FAILURE,SELECT_DISH} from '../constants/actionTypes';
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

export const selectDish = (dish) => ({
  type: SELECT_DISH,
  dish
})

export function fetchDishes (){
	return (dispatch) => {
		dispatch(requestDishes())
		fetch(`https://randomuser.me/api/?results=20`)
		.then(response => response.json())
		.then(json => dispatch(requestDishesSuccess(mock)))
		.catch((error) => {
			dispatch(requestDishesEror(error))
		})
	}
}dispatch => {

}
