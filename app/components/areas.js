import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';

export default class Areas extends Component {
  render() {
    let data = this.props.areas
    return (
      <View style={style.container}>
        <Text style={style.title}>{data.title.toUpperCase()}</Text>
        <FlatList
          style={style.list}
          data={data.items}
          keyExtractor={(obj, idx) => { idx.toString() }}      
          numColumns={2}
          renderItem={this.renderItem} />
      </View>
    );
  }

  renderItem = ({item}) => (
    <View style={style.item}>
      <View style={style.itemContent}>
        <Image
          style={style.icon}
          source={assets[item.icon]}
          resizeMode='contain'/>
        <Text style={style.name}>{item.name.toUpperCase()}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: { backgroundColor: '#efefef', paddingTop: 10, paddingBottom: 10 },
  title: { fontWeight: 'bold', fontSize: 18, alignSelf: 'center', marginTop: 10, marginBottom: 20 },
  list: { marginHorizontal: 5 },
  item: { flex: 0.5 },
  itemContent: { margin: 5, backgroundColor: '#fff', borderRadius: 4, padding: 10 },
  icon: { height: 40, alignSelf: 'center', marginBottom: 7, marginTop: 5 },
  name: { alignSelf: 'center', textAlign: 'center', height: 40 }
});

const assets = {
  "ic-engenharia": require('../assets/images/ic-engenharia.png'),
  "ic-atendimento": require('../assets/images/ic-atendimento.png'),
  "ic-comunicacao-mkt": require('../assets/images/ic-comunicacao-mkt.png'),
  "ic-desenvolvimento-vendedores": require('../assets/images/ic-desenvolvimento-vendedores.png'),
  "ic-design": require('../assets/images/ic-design.png'),
  "ic-produto": require('../assets/images/ic-produto.png'),
  "ic-trustnsafety": require('../assets/images/ic-trustnsafety.png'),
  "ic-adm-financeiro": require('../assets/images/ic-adm-financeiro.png')
};
