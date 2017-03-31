/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import MainScreen from './Screens/MainScreen';
import settings from './AppSettings.js';

export default class AwesomeProject extends Component {

  renderScene(route, navigator) {
     return React.createElement(route.component, { ...this.props, ...route.passProps, route, navigator } )
  }

  configureScene(route, routeStack){
      if(route.type === 'Modal') {
        return Navigator.SceneConfigs.FloatFromBottom
      }
      return Navigator.SceneConfigs.PushFromRight
  }

  render() {
    return (
      <Navigator
        configureScene={ this.configureScene }
        style={{ flex:1 }}
        initialRoute={{ component: MainScreen, passProps: { title: 'scene1'} }}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: settings.color_1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
