import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Header from './header';
import Culture from './culture';
import Areas from './areas';
import Footer from './footer';

export default class Home extends Component {

  render() {
    const data = this.props.data;
    return (
      <ScrollView>
        <View style={{paddingBottom: 81}}>
          <Header departments={data.departments}/>
          <Culture culture={data.culture}/>
          <Areas areas={data.areas}/>
          <Footer footer={data.footer}/>
        </View>
      </ScrollView>
    );
  }
}
