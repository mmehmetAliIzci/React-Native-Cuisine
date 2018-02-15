import React, { Component } from 'react';
import {
  StyleSheet,         // CSS-like styles
  View     ,
  ImageBackground,
  Text           // Container component
} from 'react-native';
import TextWithFont from './TextWithFont'
import Dimensions from 'Dimensions';
// Detect screen size to calculate row height
// Detect screen size to calculate row height
const screen = Dimensions.get('window');
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
  render({ dish } = this.props) {
    // Extract values from dish object

    return (
      // Row press handler
      <View>
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
    );
  }

}

const styles = StyleSheet.create({
  dishImage:{
    height: screen.height / 3,
    flex: 1,
    justifyContent: 'flex-end',
  },
  dishName:{
    fontSize: 44,
    color: "white",
    paddingLeft: 30
  },
});
