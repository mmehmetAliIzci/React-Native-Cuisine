/**
 * Responsible for Navigation
 */
import React from 'react';
import { StackNavigator } from 'react-navigation';


import DishList from '../screens/DishList';
import DishDetailScreen from '../screens/DishDetailScreen'

export const Root = StackNavigator({
  // Main screen
  List: {
    screen: DishList,
    navigationOptions: {
      title: 'Dishes'
    },
  },
  // Secondary Screen
  Details: {
    screen: DishDetailScreen,
    navigationOptions:{
      title: 'Details',
    },
  },
});
