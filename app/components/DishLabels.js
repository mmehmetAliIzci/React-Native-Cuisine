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
      case "Healthy":
        iconName = "heart"
        break;
      case "Gluten-free":
        iconName = "block"
        break;
      default:
        iconName = "check"
    }
    return (
      <View style={styles.labelBoxWrapper}>
        <Entypo name={iconName} size={32} color={COLOR_SECONDARY} key={labelText}/>
        <TextWithFont>
          {labelText}
        </TextWithFont>
      </View>
    )
  }


  // Extract onChangeText and onPressFilter props passed from List component
  render({ dish} = this.props) {
    // Extract values from dish object

    return (
      // Row press handler
      <View>
        <View>
          <SectionHeading text="Labels"/>
        </View>
        <View style={styles.labelsWrapper}>
          <View style={styles.labelBoxWrapper}>
            <Entypo name="bowl" size={32} color={COLOR_SECONDARY} />
            <TextWithFont>
              {dish.person} Person
            </TextWithFont>
          </View>
          {dish.healthLabels.map(this.mapLabelsToIcons)}
        </View>
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  labelBoxWrapper:{
    flexDirection: 'column',
    alignItems: 'center',
  }
});
