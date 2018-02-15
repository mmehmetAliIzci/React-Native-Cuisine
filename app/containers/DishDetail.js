import React, { Component } from 'react';
import {
  ScrollView,         // Scrollable container
  StyleSheet,         // CSS-like styles
  View                // Container component
} from 'react-native';
import Dimensions from 'Dimensions';
import TextWithFont from '../components/TextWithFont'

import DishLabels from '../components/DishLabels'
import DishMethod from '../components/DishMethod'
import DishImage from '../components/DishImage'
import SectionHeading from '../components/SectionHeading'
import DishIngredients from '../components/DishIngredients'




export default class Movie extends Component {




  // Extract movie object passed as a prop from Row component
  render({ dish } = this.props) {
    // Extract values from movie object
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <DishImage dish={dish}/>
        </View>
        <View style={styles.textContentContainer}>
          <View style={[styles.sectionContainer,styles.labelsContainer]}>
            <DishLabels dish={dish}/>
          </View>
          <View style={[styles.sectionContainer,styles.ingredientsContainer]}>
            <DishIngredients ingredients={dish.ingredients}/>
          </View>
          <View style={[styles.sectionContainer,styles.methodContainer]}>
            <DishMethod method={dish.method}/>
          </View>
        </View>
      </ScrollView>
    );
  }
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
