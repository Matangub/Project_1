import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, ListView, StyleSheet, Image, Dimensions } from 'react-native';

import Card from '../Components/Card.js';

export default class HomeTab extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2' ,'row 1', 'row 2']),
    };
  }

  render() {
    return (
      <ListView
        style={{marginBottom: 50}}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Card />} />
    );
  }
}
