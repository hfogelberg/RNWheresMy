import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import styles from '../styles/styles';

const SaveLocation = React.createClass({
  getInitialState: function() {
    return {
      lat: 0,
      lon: 0,
      location: 'Fetching current location ...'
    };
  },

  componentDidMount: function() {
    if (this.props.lat != null) {
      this.setState({
        lon: this.props.lon,
        lat: this.props.lat,
        location: 'Lat: ' + this.props.lat + ', lon: ' + this.props.lon
      }, function() {
        this.savePosition();
        this.getExtremes();
      });
    } else {
      this.refreshLocation();
    }
  },

  refreshLocation: function() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = position.coords;
        console.log(coords);
        if (coords != null) {
          this.setState({
            lon: coords.longitude,
            lat: coords.latitude,
            location: 'Lat: ' + coords.latitude + ', Lon: ' + coords.longitude
          }, function() {
            // this.reverseGeocode();
          });
        }
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  },

  render() {
    return (
      <View style={styles.container}>
        <Text>Save Location</Text>
        <Text>{this.state.location}</Text>
      </View>
    )
  }
});

export default SaveLocation;
