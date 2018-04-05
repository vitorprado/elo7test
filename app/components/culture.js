import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

export default class Culture extends Component {
  render() {
    let data = this.props.culture
    return (
      <FlatList
        data={data}
        keyExtractor={(obj, idx) => { idx.toString() }}
        renderItem={this.renderItem}
      />
    );
  };

  renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title.toUpperCase()}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Image 
        style={styles.icon}
        resizeMode='contain'
        source={assets[item.icon]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff' },
  item: { padding: 5, margin: 10, alignContent: 'center' },
  title: { alignSelf: 'center', fontSize: 16, fontWeight: 'bold', padding: 7 },
  description: { alignSelf: 'center', fontSize: 14, textAlign: 'center' },
  icon: { height: 120, width: 120, alignSelf: 'center', marginTop: 10 }
});

const assets = {
  "criatividade": require('../assets/images/criatividade.png'),
  "colaboracao": require('../assets/images/colaboracao.png'),
  "tec-ino": require('../assets/images/tec-ino.png')
}
