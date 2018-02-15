import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator,TouchableOpacity,StyleSheet } from "react-native";
import { List, ListItem } from "react-native-elements";


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/dishesActions';

import DishItem from '../components/DishItem'
import ListSeperator from '../components/ListSeperator'
import SearchAndFilterBar from '../components/SearchAndFilterBar'
import * as utils from '../utils'

class DishList extends Component {

  componentDidMount() {
    this.props.actions.fetchDishes();
  }


  _onChangeText = (filterText) => {
    let filteredList = [...this.props.Dishes.dishList]
    if (filterText) {
      filteredList = utils.searchDish(filterText,filteredList)
    }
    this.props.actions.updateFilteredList(filteredList);
  }

  _onPressSort = () => {
    console.log('Yoo')
  }

  goToDetails = (dish) => {
    this.props.actions.selectDish(dish)
    this.props.navigation.navigate('Details')
  }

  _renderRow = (dish) => {
    return (
      <DishItem
        dish={dish}
        onPress={() => this.goToDetails(dish)}
      />
    )
  }

  render() {

    return (
      <View style={styles.LayoutWrapper}>
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
