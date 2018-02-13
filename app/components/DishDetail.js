import React, { Component } from 'react';
import {
  Image,              // Renders background image
  ScrollView,         // Scrollable container
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Handles button presses
  View                // Container component
} from 'react-native';

export default class Movie extends Component {

  // Extract movie object passed as a prop from Row component
  render({ dish } = this.props) {
    // Extract values from movie object
    return (
      <View style={styles.container}>
        <View style={styles.boxContainer, styles.imageContainer}>
          <Image style={{width: '100%',height:'75%'}} source={{uri: dish.image}}/>
        </View>
        <View>
          <Text>{dish.name}</Text>
        </View>
        <View style={styles.boxContainer, styles.ingredientsContainer}>
          <Text>{dish.ingredients}</Text>
        </View>
        <View style={styles.boxContainer, styles.labelsContainer}>
          <Text>{dish.person} - {dish.healthLabels}</Text>
        </View>
        <View style={styles.boxContainer, styles.methodContainer}>
          <Text>{dish.method}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,                            // Take up all screen space
    flexDirection: 'column',
    backgroundColor: '#333',            // Dark background
  },
  boxContainer:{
    flex: 1
  },

});
