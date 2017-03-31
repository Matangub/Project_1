import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, ListView, StyleSheet, Image, Dimensions, TextInput } from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height
const imgSize = (width/3) // third the width of the screen for each image

import Icon from 'react-native-vector-icons/EvilIcons';
import settings from '../AppSettings.js';
import Search from '../Components/Search.js';
import ImgRow from '../Components/ImgRow.js';

export default class SearchScreen extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      isUserSearching: false,
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2','row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2','row 1', 'row 2']),
    };
  }
  _onPressButton() {
    //alert("hello")
  }
  handleInput(event) {
    const input_text = event.nativeEvent.text;

    this.setState({
      isUserSearching: (input_text.length > 0)
    });
  }
  renderSocial() {
    return (
        <ListView
          style={{marginBottom: 50}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
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
          }}
        />
    )
  }
  renderSearch() {
    return (
      <View style={styles.searchWrapper}>
        <ListView
          style={{marginBottom: 50}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (
              <ImgRow width={50} height={50} text="Matan Gubkin">
                <Icon size={18} color={settings.color_2} name="user"></Icon>
                <Text style={styles.likeIcon}>1337 followers</Text>
              </ImgRow>
            )
          }}
        />
      </View>
    )
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Search onChange={this.handleInput.bind(this)} />
        <View>
          { this.state.isUserSearching ? this.renderSearch() : this.renderSocial() }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    marginBottom: 25
  },
  TextInputContainer: {
    width: width,
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: settings.color_2
  },
  likeIcon: {
    color: settings.color_2,
    fontSize: 12
  },
  myInput: {
    flex: 1,
    marginLeft: 30,
  },
  searchWrapper: {
    marginBottom: 25
  },
  searchIcon: {
    position: 'absolute',
    top: 12,
    left: 5,
    color: settings.color_2
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
