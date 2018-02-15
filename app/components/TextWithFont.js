import React, { Component } from 'react';
import {
  Text                // Container component
} from 'react-native';

export default class TextWithFont extends Component {
  render() {
    return (
      <Text style={{fontFamily: 'Avenir'}}>
        {this.props.children}
      </Text>
    );
  }
}
