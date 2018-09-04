import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';
import { incrementCount } from './action'

export class InnerApp extends Component {
  render() {
    console.log('props', this.props)
    return (
      <View style={styles.container}>
        <Button title="Click" onPress={() => this.props.incrementCount()} />
        <Text>{this.props.count}</Text>
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

const mapDispatchToProps = {
  incrementCount
}

const mapStateToProps = state => {
  count: state.counter.count
}

export default connect(mapStateToProps, mapDispatchToProps)(InnerApp)
