import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import styles from '../styles/styles';
import MapView from 'react-native-maps';

class Map extends Component {
  componentDidMount() {
    console.log('Map mounted', this.props.name);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    )
  }
}


export default Map;
