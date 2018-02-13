import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/dishesActions';


class DishList extends Component {

  render() {
    debugger;
    return (
      <Text>{this.props.Dishes.selectedDish.phone}</Text>
    );
  }

}


function mapStateToProps(state) {
  return {
    Dishes: state.Dishes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishList);
