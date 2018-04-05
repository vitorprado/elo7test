import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity, Linking } from 'react-native';

export default class Footer extends Component {
  render() {
    let data = this.props.footer
    return (
      <View style={style.container}>
        <Text style={style.title}>{data.title.toUpperCase()}</Text>
        <FlatList
          style={style.list}
          data={data.links}
          numColumns={9}
          keyExtractor={(obj, idx) => { idx.toString() }}      
          renderItem={this.renderItem}
        />
      </View>
    );
  }

  renderItem = ({item}) => (
    <TouchableOpacity onPress={() => { this.openUrl(item.link) }}>
      <Image 
        style={style.icons}
        source={assets[item.icon]}
        resizeMode='contain'
      />
    </TouchableOpacity>
  );

  openUrl(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  }
}

const style = StyleSheet.create({
  container: { paddingTop: 25, paddingBottom: 25, backgroundColor: '#7e7873'},
  title: { color: '#fff', fontWeight: 'bold', fontSize: 18, alignSelf: 'center' },
  list: { alignSelf: 'center', marginTop: 30, marginBottom: 20 },
  icons: { width: 35, height: 35, marginLeft: 3, marginRight: 3 }
});

const assets = {
  "facebook": require('../assets/images/facebook.png'),
  "instagram": require('../assets/images/instagram.png'),
  "pinterest": require('../assets/images/pinterest-light.png'),
  "linkedin": require('../assets/images/linkedin.png'),
  "blog": require('../assets/images/BLOG.png'),
  "googleplus": require('../assets/images/googleplus.png'),
  "twitter": require('../assets/images/twitter.png')
}
