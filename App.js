import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Home from './app/components/home'
import Toolbar from './app/components/toolbar'
import Firebase from './app/components/firebase'

export default class App extends Component {

  constructor(props) {
    super(props);
    Firebase.initialise();
    this.localState = {
      loading: true,
      data: {}
    };
    this.loadData();
  }

  render() {
    if (this.localState.loading) {
      return (<ActivityIndicator size="large" color="#0000ff" style={{ alignSelf: 'center', flex: 1 }} />);
    } else {
      return (
        <View>
          <Toolbar />
          <Home data={this.localState.data}/>
        </View>
      );
    }
  }

  loadData() {
    Firebase.loadData().then((data) => {
      this.localState = { loading: false, data: data };
      this.forceUpdate();
    });
  }
}
