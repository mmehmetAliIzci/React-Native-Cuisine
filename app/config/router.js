import React from 'react';
import { StackNavigator } from 'react-navigation';


import DishList from '../screens/DishList';
import DishDetail from '../screens/DishDetail'

export const Root = StackNavigator({
  List: {
    screen: DishList,
    navigationOptions: {
      title: 'Dishes',
    },
  },
  Details: {
    screen: DishDetail,
    navigationOptions:{
      title: 'Details',
    },
  },
});
