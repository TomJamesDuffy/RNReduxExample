import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducer/reducer';
import ChildComponent from './src/component/ChildComponent';
import { styles } from './src/component/styles';

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ChildComponent />
        </View>
      </Provider>
    );
  }
}
