import React, {Component} from 'react';
import {
  DeviceEventEmitter,
  Navigator,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { EventEmitter } from 'fbemitter';
import styles from '../styles/styles.js';

let _emitter = new EventEmitter;

class App extends Component {
  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Where's my</Text>
      </View>
    )
  }
}

export default App;
