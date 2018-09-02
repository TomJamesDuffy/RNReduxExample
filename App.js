import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStore} from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './reducer';

const store = createStore(reducer)
// Create redux store
// Pass in your reducer file as an argument
// You can also pass in a reducer folder as an argument


export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
