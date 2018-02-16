/**
 * Responsible for Rendering Globally styled (fontFamily) text
 */

import React, { Component } from 'react';
import {
  Text,                // Container component
  StyleSheet
} from 'react-native';
import {FONT_FAMILY} from '../styles/globalStyles'

export default class TextWithFont extends Component {
  render() {
    return (
      <Text style={styles.styledText}>
        {this.props.children}
      </Text>
    );
  }
}


const styles = StyleSheet.create({
  styledText: {
    fontFamily: FONT_FAMILY
  }
});
