/**
 * Responsible for rendering DetailScreen by calling child views
 */ 

import React, { Component } from 'react';
import { ScrollView,View,StyleSheet } from "react-native";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/dishesActions';

import DishLabels from '../components/DishLabels'
import DishMethod from '../components/DishMethod'
import DishDetailImage from '../components/DishDetailImage'
import SectionHeading from '../components/SectionHeading'
import DishIngredients from '../components/DishIngredients'

class DishDetailScreen extends Component {

  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <DishDetailImage dish={this.props.Dishes.selectedDish}/>
        </View>
        <View style={styles.textContentContainer}>
          <View style={[styles.sectionContainer,styles.labelsContainer]}>
            <DishLabels dish={this.props.Dishes.selectedDish}/>
          </View>
          <View style={[styles.sectionContainer,styles.ingredientsContainer]}>
            <DishIngredients ingredients={this.props.Dishes.selectedDish.ingredients}/>
          </View>
          <View style={[styles.sectionContainer,styles.methodContainer]}>
            <DishMethod method={this.props.Dishes.selectedDish.method}/>
          </View>
        </View>
      </ScrollView>
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
const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,                            // Take up all screen space
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  textContentContainer:{
    paddingLeft: 10,
    paddingRight: 10
  },
  sectionContainer: {
    borderBottomWidth: 2,
    borderColor: "#F5F7F9",
    paddingTop: 5,
    paddingBottom: 5,
  },
  imageContainer: {
    alignSelf: 'stretch'
  },
  ingredientsContainer: {
    flex:3
  },
  methodContainer: {
    flex:5,
    paddingBottom: 20
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishDetailScreen);
