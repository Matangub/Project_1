import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, ListView, StyleSheet, Image, Dimensions } from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

import Icon from 'react-native-vector-icons/EvilIcons';
import settings from '../AppSettings.js';

export default class ImgRow extends Component {

  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <View style={styles.wrapper}>
          <Image
          style={styles.imgStyle}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>

          <Text>{this.props.text}</Text>
          <View style={styles.iconWrapper}>
            {this.props.children}
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  iconWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10
  }
});
