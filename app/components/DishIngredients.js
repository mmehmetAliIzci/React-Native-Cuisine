import React, { Component } from 'react';
import {
  StyleSheet,         // CSS-like styles
  View                // Container component
} from 'react-native';
import SectionHeading from "./SectionHeading"
import TextWithFont from './TextWithFont'
// Detect screen size to calculate row height

export default class DishIngredients extends Component {

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


  // Extract onChangeText and onPressFilter props passed from List component
  render({ ingredients} = this.props) {
    // Extract values from dish object

    return (
      // Row press handler
      <View>
        <SectionHeading text="Ingredients"/>
        {ingredients.map(this.mapIngredients)}
      </View>
    );
  }

}

const styles = StyleSheet.create({
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
