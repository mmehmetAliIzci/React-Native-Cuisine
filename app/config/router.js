import React from 'react';
import { StackNavigator } from 'react-navigation';


import DishList from '../screens/DishList';
import DishDetailScreen from '../screens/DishDetailScreen'

export const Root = StackNavigator({
  List: {
    screen: DishList,
    navigationOptions: {
      title: 'Dishes'
    },
  },
  Details: {
    screen: DishDetailScreen,
    navigationOptions:{
      title: 'Details',
    },
  },
});
