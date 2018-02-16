/**
 * Responsible for rendering Dish Method in Detail Screen
 */

import React, { Component } from 'react';
import {
  StyleSheet,         // CSS-like styles
  View                // Container component
} from 'react-native';
import SectionHeading from "./SectionHeading"
import TextWithFont from './TextWithFont'


export default class DishMethod extends Component {

  render({ method } = this.props) {
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
