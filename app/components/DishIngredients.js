/**
 * Responsible for Rendering Ingredients Section in DishDetailScreen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import SectionHeading from "./SectionHeading"
import TextWithFont from './TextWithFont'


export default class DishIngredients extends Component {


  /**
   * Responsible for mapping Ingredients to => LIST ROW
   */
  mapIngredients = (ingredientObj) => {
    return (
      <View style={styles.ingredientRow} key={ingredientObj.ingredientName}>
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


  render({ ingredients} = this.props) {
    return (
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
