import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/dishesActions';


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


  handleRefresh = () => {
    // this.setState(
    //   {
    //     page: 1,
    //     seed: this.state.seed + 1,
    //     refreshing: true
    //   },
    //   () => {
    //     this.makeRemoteRequest();
    //   }
    // );
    // this.props.actions.fetchDishes();
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        // this.makeRemoteRequest();
      }
    );
  };

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

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {

    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        { this.props.Dishes.isFetching &&
          <Text>Loading..</Text>
        }
        {/* { this.props.Dishes.dishList.length > 0 ?
          <Text>We have data</Text> :
          <Text>We Dont have data</Text>

        } */}
        <FlatList
          data={this.props.Dishes.dishList}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
              avatar={{ uri: item.picture.thumbnail }}
              containerStyle={{ borderBottomWidth: 0 }}
              onPress={() => this.goToDetails(item)}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
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
