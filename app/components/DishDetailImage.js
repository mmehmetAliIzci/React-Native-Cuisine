/**
 * Responsible for Rendering Image in DishDetail Screen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View     ,
  ImageBackground,
  Text
} from 'react-native';
import TextWithFont from './TextWithFont'
import Dimensions from 'Dimensions';

// Detect screen size to calculate row height
const screen = Dimensions.get('window');
export default class DishDetailImage extends Component {


  render({ dish } = this.props) {

    return (
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
    paddingLeft: 30,
    fontWeight: 'bold',
    // Add text shadow
    textShadowColor: '#222',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});
