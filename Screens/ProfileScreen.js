import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, ListView, StyleSheet, Image, Dimensions } from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height
const imgSize = (width/3) // third the width of the screen for each image

import Icon from 'react-native-vector-icons/EvilIcons';
import settings from '../AppSettings.js';

export default class ProfileScreen extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 2', 'row 2', 'row 2' ,'row 2' , 'row 2', 'row 2', 'row 2', 'row 2' ,'row 2' ,'row 2','row 2']),
    };
  }
  handle_gear_press() {
    alert('gear')
  }
  renderTopContainer() {

    return (
      <View>
        <View style={styles.topContainer}>

          <View style={styles.gearIcon}>
            <Icon.Button size={48} backgroundColor={settings.color_1} color={settings.color_2} name="pencil" onPress={this.handle_gear_press}></Icon.Button>
          </View>

          <Image
            style={styles.profileImg}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
          <Text>Matan Gubkin</Text>
          <View style={styles.locationContainer}>
            <Icon size={18} color={settings.color_2} name="location"></Icon>
            <Text style={styles.textStyle}>Kibbutz Yifat</Text>
          </View>
        </View>

        <View style={styles.statisticsContainer}>
          <View style={styles.statisticsItem}>
            <Text style={styles.upperText}> 1337 </Text>
            <Text style={styles.bottomText}> Followers </Text>
          </View>

          <View style={styles.statisticsItem}>
            <Text style={styles.upperText}> 584 </Text>
            <Text style={styles.bottomText}> Likes </Text>
          </View>

          <View style={styles.statisticsItem}>
            <Text style={styles.upperText}> 669 </Text>
            <Text style={styles.bottomText}> photos </Text>
          </View>
        </View>
      </View>
    )
  }
  renderimages(rowData) {

    return (
      <View style={styles.listStyle}>
        <TouchableHighlight onPress={this._onPressButton}>
          <Image
          style={styles.imgStyle}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton}>
          <Image
          style={styles.imgStyle}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton}>
          <Image
          style={styles.imgStyle}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
        </TouchableHighlight>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.mainContainer}>

        <ListView
          style={{marginBottom: 50}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return rowData == 'row 1' ? this.renderTopContainer() : this.renderimages()
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  gearIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 9999
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5
  },
  statisticsContainer: {
    width: width,
    flexDirection: 'row',
    height: 70,
    borderBottomWidth: 1,
    borderColor: settings.color_2,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center'
  },
  statisticsItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  locationContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 10
  },
  upperText: {
    fontSize: 12
  },
  bottomText: {
    color: settings.color_2
  },
  topContainer: {
    width: width,
    height: 200,
    borderBottomWidth: 1,
    borderColor: settings.color_2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgStyle: {
    width: imgSize,
    height: imgSize,
    borderWidth: 1,
    borderColor: settings.color_1
  },
  listStyle: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 0
  }
});
