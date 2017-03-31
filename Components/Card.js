import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, ListView, StyleSheet, Image, Dimensions } from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

import Icon from 'react-native-vector-icons/FontAwesome';
import settings from '../AppSettings.js';

export default class Card extends Component {

  render() {
    return (
      <View style={styles.mainContainer}>

        {/* TOOLBAR ROW */}

         <View style={styles.toolbar}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Image style={{borderRadius: 50, width: 30, height: 30, marginRight: 10, marginTop: 3}} source={{uri: 'https://2.bp.blogspot.com/-ZSU-wIMhulw/V_7633XnvDI/AAAAAAAANEw/Goa9fyYKASURk63BCvVnCzGhWK2aIimGACLcB/s1600/Cute%2BGirl%2BProfile%2BPhotos%2BFor%2BFacebook%2B1.jpg'}} />

                <View>
                  <Text style={styles.toolbarTitle}>Matan Gubkin</Text>
                  <Text style={styles.toolbarButton}>Kibbutz Yifat</Text>
                </View>
            </View>

            <View>
              <Text style={styles.toolbarButton}>1H</Text>
            </View>
         </View>


         <View style={styles.centerBox}>
           <Image
             style={{width: width, height: 300}}
             source={{uri: 'http://cdn.londonandpartners.com/assets/competitions/82274-640x360-towerbridge-selfie.jpg'}} />

           {/* LIKES & DISLIKES ROW */}

           <View style={styles.actionRow}>

              <View style={styles.midIcons}>

                <View style={styles.iconAlign}>
                  <Text style={{fontSize: 12}}>1337</Text>
                  <Icon style={{marginHorizontal: 5}} size={24} color={settings.color_2} name="thumbs-down"></Icon>
                </View>

                <View style={styles.iconAlign}>
                  <Icon style={{marginHorizontal: 5}} size={24} color={settings.color_2} name="thumbs-up"></Icon>
                  <Text style={{fontSize: 12}}>1337</Text>
                </View>

              </View>

             </View>

             {/* COMMENTS */}

             <View style={{flexDirection: 'row', width: width-100, paddingHorizontal: 10, paddingVertical: 5}}>
               <Text style={{fontWeight: 'bold', fontSize: 12}}>Matan gubkin: </Text>
               <Text style={{fontSize: 10, marginTop: 1, alignItems: 'center'}}>Nice picture you got there</Text>
             </View>
             <View style={{flexDirection: 'row', width: width-100, paddingHorizontal: 10, paddingVertical: 5}}>
               <Text style={{fontWeight: 'bold', fontSize: 12}}>Matan gubkin: </Text>
               <Text style={{fontSize: 10, marginTop: 1, alignItems: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sed do</Text>
             </View>
             <View style={{flexDirection: 'row', width: width-100, paddingHorizontal: 10, paddingVertical: 5}}>
              <Text style={{fontSize: 12, marginTop: 1, color: settings.color_2}}>View 10 more comments...</Text>
             </View>
         </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      paddingVertical: 10,
      marginBottom: 20
    },
    midIcons: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginRight: 10
    },
    actionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderColor: settings.color_2,
      borderBottomWidth: 1,
    },
    iconAlign: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    content: {
      flex: 1,
      flexWrap: 'wrap'
    },
    toolbar: {
      flexDirection: 'row',
      padding: 5,
      justifyContent: 'space-between',
    },
    actionBar: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 15,
      padding: 10,
    },
    toolbarButton: {
      fontSize: 10
    },
    iconStyle: {
      marginRight: 0
    },
    centerBox: {
      flex: 1
    }
});
