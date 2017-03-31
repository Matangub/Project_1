import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

import SecondScreen from './SecondScreen.js';
import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeTab from './HomeTab.js';
import SearchScreen from './SearchScreen.js';
import FavoriteScreen from './FavoriteScreen.js';
import ProfileScreen from './ProfileScreen.js';
import settings from '../AppSettings.js';

const myButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
    Login with Facebook
  </Icon.Button>
);

const customTextButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
  </Icon.Button>
);

export default class MainScreen extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  _navigate(title, type='Normal') {
    this.props.navigator.push({
      component: SecondScreen,
      passProps: {
        title: title
      },
      type: type
    })
  }
  constructor(props){
     super(props);
     this.state = {page: 1};
  }
  renderTabs() {

    switch(this.state.page) {
      case 1:
        return (<HomeTab />);
      case 2:
        return (<SearchScreen />);
      case 3:
        return (<FavoriteScreen />);
      case 4:
        return (<ProfileScreen />);
      default:
        return null;
    }
  }
  render() {
     var self = this;

     return (
       <View style={styles.container}>
        { this.renderTabs() }
         <Tabs selected={this.state.page} style={{backgroundColor:'white'}} selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
             <Text name={1}>
                <Icon name="home" size={24} />
             </Text>
             <Text name={2}>
                <Icon name="search" size={24} />
             </Text>
             <Text name={3}>
                <Icon name="heart" size={24} />
             </Text>
             <Text name={4}>
                <Icon name="user" size={24} />
             </Text>
         </Tabs>
       </View>
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
