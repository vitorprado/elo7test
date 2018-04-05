import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground, Picker } from 'react-native';

export default class Header extends Component {

  render() {
    const departments = this.props.departments;
    let departmentItems = departments.map( (s, i) => {
      return <Picker.Item key={i+1} value={s} label={s} />
    });
    return (
      <View style={styles.container}>
        <ImageBackground 
          style={{width: '100%', height: '100%', alignContent: 'center' }}
          source={require('../assets/images/heroshot.png')}>
          <Image 
            style={{ width: '50%', alignSelf: 'center' }}
            resizeMode='contain'
            source={require('../assets/images/titulo.png')}
          />

          <Picker style={{ width: '60%', backgroundColor: '#fff', alignSelf: 'center', borderRadius: 50, borderColor: '#fff'}}>
            <Picker.Item key={0} value="" label="Escolha um departamento" />
            {departmentItems}
          </Picker>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { height: 200 },
  bg: {},
  text: {},
  picker: {}
});
