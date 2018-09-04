import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { InnerApp } from './InnerApp';

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <InnerApp proptest="ji" />
        </View>
      </Provider>
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
