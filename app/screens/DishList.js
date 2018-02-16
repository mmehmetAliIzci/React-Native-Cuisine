/**
 * Responsible for rendering Main Screen (DishLists) by calling child views
 */

import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator,StyleSheet } from "react-native";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/dishesActions';

import DishListRow from '../components/DishListRow'
import ListSeperator from '../components/ListSeperator'
import SearchAndFilterBar from '../components/SearchAndFilterBar'
import * as utils from '../utils'

class DishList extends Component {


  /**
   * componentDidMount - Responsible for Fetching Dishes on initialization and
   * invoke necessary actions
   *
   */
  componentDidMount() {
    this.props.actions.fetchDishes();
  }


  /**
   * _onChangeText - Responsible for handling SearchBar queries by calling
   * utils.searchDish and invoking necessary actions
   */
  _onChangeText = (filterText) => {
    // Never alter the props
    let filteredList = [...this.props.Dishes.dishList]
    // Dont do anything if filterText is undefined
    if (filterText) {
      // Call utils and get the filteredList
      filteredList = utils.searchDish(filterText,filteredList)
    }
    // Invoke the necessary action
    this.props.actions.updateFilteredList(filteredList);
  }


  /**
   * _onPressSort - Responsible for handling SortButton clicks by calling
   * utils.sortDishesByName and invoking necessary actions
   */
  _onPressSort = () => {
    // Never alter the props
    let arrayToSort = [...this.props.Dishes.dishList]
    // Invoke the necessary action
    this.props.actions.updateFilteredList(utils.sortDishesByName(arrayToSort))
  }



  /**
   * goToDetails - Responsible for handling RowItem clicks by invoking necessary
   * actions
   */
  goToDetails = (dish) => {
    // Let Reducer know this dish is selected
    this.props.actions.selectDish(dish)
    // Navigate the view to the Detail View
    this.props.navigation.navigate('Details')
  }


  /**
   * _renderRow - Responsible For rendering List rows
   */
  _renderRow = (dish) => {
    return (
      <DishListRow
        dish={dish}
        onPress={() => this.goToDetails(dish)}
      />
    )
  }

  render() {

    return (
      <View style={styles.LayoutWrapper}>
        {/* Show indicator while the API response is waiting */}
        { this.props.Dishes.isFetching ?
          <View style={styles.MainContainer}>
            <ActivityIndicator animating size="large" />
          </View>
          :
          <View style={styles.MainContainer}>
            <SearchAndFilterBar onPressSort={this._onPressSort} onChangeText={this._onChangeText} />
            <View style={styles.ListContainer}>
              <FlatList
                data={this.props.Dishes.filteredList}
                renderItem={({ item }) => (this._renderRow(item))}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <ListSeperator/>}
              />
            </View>
          </View>
        }
      </View>

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

const styles = StyleSheet.create ({
  LayoutWrapper: {
    flex:1,
    alignSelf: 'stretch',
    flexDirection: 'column'
  },
  MainContainer: {
    flex:1,
    flexDirection: 'column'
  },
  ListContainer:{
    flex:1
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishList);
