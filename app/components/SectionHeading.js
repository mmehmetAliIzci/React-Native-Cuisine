import React, { Component } from 'react';
import {
  Text,                // Container component
  StyleSheet
} from 'react-native';
import TextWithFont from './TextWithFont'
export default class SectionHeading extends Component {
  render({text} = this.props) {
    return (
      <TextWithFont >
        <Text style={styles.sectionHeading}>{text}</Text>
        {this.props.children}
      </TextWithFont>
    );
  }
}


const styles = StyleSheet.create({
  // Row
  sectionHeading: {
    fontSize: 25
  }
});
