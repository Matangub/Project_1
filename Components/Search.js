import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, ListView, StyleSheet, Image, Dimensions, TextInput } from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

import Icon from 'react-native-vector-icons/EvilIcons';
import settings from '../AppSettings.js';

export default class Search extends Component {

  render() {
    return (
        <View style={styles.TextInputContainer}>
          <TextInput
            onChange={this.props.onChange}
            style={styles.myInput}
            underlineColorAndroid={settings.color_1}
            selectionColor={settings.color_1}
            placeholder="Search"
            editable={true}
            maxLength={40} />
          <Icon name="search" size={40} style={styles.searchIcon} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInputContainer: {
    width: width,
    height: 65,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: settings.color_2
  },
  myInput: {
    flex: 1,
    marginLeft: 40,
  },
  searchIcon: {
    position: 'absolute',
    top: 15,
    left: 5,
    color: settings.color_2
  }
});
