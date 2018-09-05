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

// You are mapping YOUR dispatcher incrementCount i.e your action creator to the props. 
// Hence why this.props.incrementCount()

const mapStateToProps = state => ({
  count: state.count
})

// The structure of your state tree is defined in your reducer. 
// You are mapping redux's STATE to YOUR props. Hence why count is accessible through this.props.count

export default connect(mapStateToProps, mapDispatchToProps)(ChildComponent)
