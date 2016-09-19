import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import styles from '../styles/styles';

class Map extends Component {
  componentDidMount() {
    console.log('Map mounted', this.props.name);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Map</Text>
      </View>
    )
  }
}

export default Map;
