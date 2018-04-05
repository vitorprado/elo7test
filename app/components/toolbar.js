import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';

export default class Toolbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.logo}
          resizeMode='contain'
          source={require('../assets/images/logo.png')}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%', 
    height: 56, 
    paddingHorizontal: 12, 
    marginTop: 25, 
    flexDirection: 'row',
  },
  logo: { width: '20%' }
});

