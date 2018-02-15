import React, { Component } from 'react';
import {
  ImageBackground,              // Renders background image
  ScrollView,         // Scrollable container
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Handles button presses
  View                // Container component
} from 'react-native';
import Dimensions from 'Dimensions';
import TextWithFont from './TextWithFont'
import { Entypo } from '@expo/vector-icons';

// Detect screen size to calculate row height
const screen = Dimensions.get('window');
export default class Movie extends Component {


  mapLabelsToIcons = (labelText) => {
    let iconName = ''
    switch (labelText) {
      case "Vegetarian":
        iconName = "flower"
        break;
      case "Light":
        iconName = "feather"
        break;
      case "Gluten-free":
        iconName = "block"
        break;
      default:
        iconName = "check"
    }
    return (
      <View>
        <Entypo name={iconName} size={32} color="rgb(76,217,100)" />
        <TextWithFont>
          <Text style={styles.labelText}> {labelText}</Text>
        </TextWithFont>
      </View>
    )
  }

  mapIngredients = (ingredientObj) => {
    return (
      <View style={styles.ingredientRow}>
        <View style={styles.ingredientAmount}>
          <TextWithFont>
            {ingredientObj.amount}
          </TextWithFont>
        </View>
        <View style={styles.ingredientName}>
          <TextWithFont>
            {ingredientObj.ingredientName}
          </TextWithFont>
        </View>
      </View>
    )
  }

  // Extract movie object passed as a prop from Row component
  render({ dish } = this.props) {
    // Extract values from movie object
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{uri: dish.image}}
            style={styles.dishImage}
          >
            <TextWithFont>
              <Text style={styles.dishName}>
                {dish.name}
              </Text>
            </TextWithFont>
          </ImageBackground>
        </View>
        <View style={styles.textContentContainer}>
          <View style={[styles.sectionContainer,styles.labelsContainer]}>
            <View>
              <Text style={styles.sectionHeading}>
                Labels
              </Text>
            </View>
            <View style={styles.labelsWrapper}>
              <TextWithFont>
                <Text><Entypo name="bowl" size={32} color="rgb(76,217,100)" /> {dish.person}</Text>
              </TextWithFont>
              {dish.healthLabels.map(this.mapLabelsToIcons)}
            </View>
          </View>
          <View style={[styles.sectionContainer,styles.ingredientsContainer]}>
            <TextWithFont>
              <Text style={styles.sectionHeading}>
                Ingredients
              </Text>
            </TextWithFont>
            {dish.ingredients.map(this.mapIngredients)}
          </View>
          <View style={[styles.sectionContainer,styles.methodContainer]}>
            <TextWithFont>
              <Text style={styles.sectionHeading}>
                Preparation
              </Text>
            </TextWithFont>
            <TextWithFont>
              <Text>{dish.method}</Text>
            </TextWithFont>
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
  sectionHeading: {
    fontSize: 25,
  },
  dishImage:{
    height: screen.height / 3,
    flex: 1,
    justifyContent: 'flex-end',
  },
  dishName:{
    fontSize: 44,
    color: "white",
    paddingLeft: 20
  },
  labelsText: {
    flex:2,
  },
  labelsWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ingredientsContainer: {
    flex:3
  },
  methodContainer: {
    flex:5,
    paddingBottom: 20
  },
  ingredientRow: {
    flexDirection: 'row',
    backgroundColor: "#EBEBEB",
    borderBottomWidth: 1,
    borderColor: "gray",
    padding: 5
  },
  ingredientAmount: {
    flex: 1
  },
  ingredientName: {
    flex: 3
  }


});
