import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { incrementCount } from '../../src/action/action'
import { styles } from './styles';

class ChildComponent extends Component {
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

const mapDispatchToProps = {
  incrementCount
}

const mapStateToProps = state => ({
  count: state.count
})

export default connect(mapStateToProps, mapDispatchToProps)(ChildComponent)
