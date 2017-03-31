import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class SecondScreen extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title}</Text>
        <Text>Current Sceneaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
      </View>
    )
  }
}
