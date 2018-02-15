import React, { Component } from 'react';
import {
  StyleSheet,         // CSS-like styles
  View                // Container component
} from 'react-native';
import SectionHeading from "./SectionHeading"
import TextWithFont from './TextWithFont'


export default class DishMethod extends Component {

  // Extract onChangeText and onPressFilter props passed from List component
  render({ method } = this.props) {
    // Extract values from dish object
    return (
      <View>
        <SectionHeading text="Preparation"/>
        <TextWithFont>
          {method}
        </TextWithFont>
      </View>
    );
  }
}
