import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/dishesActions';

import DishItem from '../components/DishItem'

class DishList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

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

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

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
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 ,flex:1  }}>
        { this.props.Dishes.isFetching ?
          <Text>Loading..</Text> :
          <FlatList
            data={this.props.Dishes.dishList}
            renderItem={({ item }) => (this._renderRow(item))}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            refreshing={this.state.refreshing}
          />
        }
      </List>
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
