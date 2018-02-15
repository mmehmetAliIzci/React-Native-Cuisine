import React, { Component } from 'react';
import {
  StyleSheet,         // CSS-like styles
  TouchableOpacity,   // Handles row presses
  View                // Container component
} from 'react-native';
import { SearchBar } from "react-native-elements";
import Dimensions from 'Dimensions';
import TextWithFont from './TextWithFont'
import { MaterialIcons } from '@expo/vector-icons';

// Detect screen size to calculate row height
const screen = Dimensions.get('window');

export default class SearchAndFilterBar extends Component {

  // Extract onChangeText and onPressFilter props passed from List component
  render({ onChangeText, onPressSort } = this.props) {
    // Extract values from dish object
    return (
      // Row press handler
      <View style={styles.HeaderContainer}>
        <View style={styles.SearchBarContainer}>
          <SearchBar
            style={styles.SearchBar}
            onChangeText={onChangeText}
            placeholder="Type Here..."
            lightTheme
            round
            showOnLoad
          />
        </View>
        <View style={styles.FilterContainer}>
          <TouchableOpacity
            // onPress={}
            activeOpacity={0.7}
            onPress={onPressSort}
            style={styles.FilterButton}
            >
              <MaterialIcons name="sort-by-alpha" size={32} color="rgb(0,122,255)" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  // Row
  HeaderContainer:{
    flexDirection: 'row'
  },
  SearchBarContainer:{
    flex: 5
  },
  SearchBar: {
    backgroundColor: "rgb(255,255,255)"
  },
  FilterContainer:{
    flex: 1,
    justifyContent: 'center',
    paddingRight: 5
  },
  FilterButton:{
    backgroundColor: "rgb(255,255,255)",
    height: 'auto',
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
