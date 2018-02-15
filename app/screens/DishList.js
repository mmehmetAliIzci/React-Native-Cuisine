import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/dishesActions';

import DishItem from '../components/DishItem'
import * as utils from '../utils'

class DishList extends Component {

  componentDidMount() {
    this.props.actions.fetchDishes();
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  _handleResults = (filterText) => {
    let filteredList = [...this.props.Dishes.dishList]
    if (filterText) {
      filteredList = utils.searchDish(filterText,filteredList)
    }
    this.props.actions.updateFilteredList(filteredList);
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
            <View style={styles.HeaderContainer}>
              <View style={styles.SearchBarContainer}>
                <SearchBar
                  style={styles.SearchBar}
                  onChangeText={this._handleResults}
                  placeholder="Type Here..."
                  lightTheme
                  round
                  showOnLoad
                />
              </View>
              <View style={styles.FilterContainer}>
                <TouchableOpacity
                  // onPress={}
                  activeOpacity={0.7}
                  style={styles.FilterButton}
                  >
                    <MaterialIcons name="sort-by-alpha" size={32} color="rgb(0,122,255)" />
                  </TouchableOpacity>
                </View>
              </View>
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
  HeaderContainer:{
    flexDirection: 'row'
  },
  SearchBarContainer:{
    flex: 5
  },
  SearchBar: {
    backgroundColor: "rgb(255,255,255)"
  },
  FilterContainer:{
    flex: 1,
    justifyContent: 'center',
    paddingRight: 5
  },
  FilterButton:{
    backgroundColor: "#F3F1F0",
    height: 'auto',
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ListContainer:{
    flex:1
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishList);
