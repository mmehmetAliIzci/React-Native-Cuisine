/**
 * Responsible for Rendering single Row in Main Dish List
 */

import React, { Component } from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Dimensions from 'Dimensions';
import TextWithFont from './TextWithFont'

// Detect screen size to calculate row height
const screen = Dimensions.get('window');

export default class DishListRow extends Component {

  // Extract dish and onPress props passed from List component
  render({ dish, onPress } = this.props) {
    // Extract values from dish object
    const { name, person, image } = dish;
    return (
      // Row press handler
      <TouchableOpacity
        // Pass row style
        style={styles.row}
        // Call onPress function passed from List component when pressed
        onPress={onPress}
        // Dim row a little bit when pressed
        activeOpacity={0.7}
      >
        {/* Background image */}
        <ImageBackground source={{uri: image}} style={styles.imageBackground}>
          {/* Title */}
          <TextWithFont>
            <Text style={[styles.text, styles.title]}>{name.toUpperCase()}</Text>
          </TextWithFont>
          {/* Rating */}
        </ImageBackground>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  // Row
  row: {
    paddingBottom: 4,                   // Add padding at the bottom
  },
  // Background image
  imageBackground: {
    height: screen.height / 3,          // Divide screen height by 3
    justifyContent: 'center',           // Center vertically
    alignItems: 'center',               // Center horizontally
  },
  // Shared text style
  text: {
    color: '#fff',                      // White text color
    backgroundColor: 'transparent',     // No background
    fontWeight: 'bold',                 // Bold font
    // Add text shadow
    textShadowColor: '#222',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  // Row title
  title: {
    fontSize: 33,                       // Bigger font size
  },
});
