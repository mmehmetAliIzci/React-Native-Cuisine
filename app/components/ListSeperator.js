import React, { Component } from 'react';
import {
  View                // Container component
} from 'react-native';

export default class ListSeperator extends Component {

  render() {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  }
}
