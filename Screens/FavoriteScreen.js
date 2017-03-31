import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, ListView, StyleSheet, Image, Dimensions, TextInput } from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height
const imgSize = (width/3) // third the width of the screen for each image

import Icon from 'react-native-vector-icons/EvilIcons';
import settings from '../AppSettings.js';
import ImgRow from '../Components/ImgRow.js';

export default class FavoriteScreen extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 1', 'row 2', 'row 1', 'row 2','row 1', 'row 2']),
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <ListView
          style={{marginBottom: 50}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (
              <View style={styles.rowWrapper}>
                <ImgRow width={50} height={50} text="like asdasd">
                  <Image
                  style={styles.imgStyle}
                  source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
                </ImgRow>
              </View>
            )
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10
  },
  imgStyle: {
    width: 50,
    height: 50
  },
  rowWrapper: {width: width-10},
});
