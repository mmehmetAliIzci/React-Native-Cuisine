import React, { Component } from 'react';
import {
  StyleSheet,
  Text,        // CSS-like styles
  View                // Container component
} from 'react-native';
import SectionHeading from "./SectionHeading"
import TextWithFont from './TextWithFont'
import { Entypo } from '@expo/vector-icons';
import {COLOR_SECONDARY} from '../styles/globalStyles'
// Detect screen size to calculate row height

export default class DishLabels extends Component {

  mapLabelsToIcons = (labelText) => {
    let iconName = ''
    switch (labelText) {
      case "Vegetarian":
        iconName = "flower"
        break;
      case "Light":
        iconName = "feather"
        break;
      case "Gluten-free":
        iconName = "block"
        break;
      default:
        iconName = "check"
    }
    return (
      <View>
        <Entypo name={iconName} size={32} color={COLOR_SECONDARY} />
        <TextWithFont>
          <Text style={styles.labelText}> {labelText}</Text>
        </TextWithFont>
      </View>
    )
  }


  // Extract onChangeText and onPressFilter props passed from List component
  render({ dish} = this.props) {
    // Extract values from dish object

    return (
      // Row press handler
      <View style={styles.labelsWrapper}>
        <SectionHeading text="Labels"/>
        <TextWithFont>
          <Text><Entypo name="bowl" size={32} color={COLOR_SECONDARY} /> {dish.person}</Text>
        </TextWithFont>
        {dish.healthLabels.map(this.mapLabelsToIcons)}
      </View>

    );
  }

}

const styles = StyleSheet.create({
  labelsText: {
    flex:2,
  },
  labelsWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
