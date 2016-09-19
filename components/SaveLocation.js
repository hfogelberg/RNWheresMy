import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  InputGroup,
  Input,
  Icon
} from 'native-base';
import styles from '../styles/styles';
import Button from 'react-native-button';
import RealmHelper from '../helpers/realmHelper';

const SaveLocation = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      comment: '',
      lat: 28.4539125,
      lon: -16.2931034,
      location: 'Fetching current location ...'
    };
  },

  componentDidMount: function() {
    console.log('Mounted');
    this.fetchLocation();
  },

  fetchLocation: function() {
    console.log('refreshLocation');
    this.setState({location: 'Lat: 28.4539125, Lon: -16.2931034'});

    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     const coords = position.coords;
    //     console.log(coords);
    //     if (coords != null) {
    //       this.setState({
    //         lon: coords.longitude,
    //         lat: coords.latitude,
    //         location: 'Lat: ' + coords.latitude + ', Lon: ' + coords.longitude
    //       });
    //     }
    //   },
    //   (error) => alert(error.message),
    //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    // );
  },

  onPress: function() {
    console.log('On press');

    if(this.state.name != '') {
      let item = {
        name: this.state.name,
        comment: this.state.comment,
        lat: this.state.lat,
        lon: this.state.lon
      }
      RealmHelper.saveItem(item);
    }
  },

  render() {
    return (
      <Container style={{marginTop: 70}}>
        <Content>
          <List>
            <ListItem>
              <Input
                autoCapitalize="sentences"
                autoCorrect={false}
                autoFocus={true}
                placeholder='Name of place'
                onChangeText={(name) => this.setState({name})} />
            </ListItem>

            <ListItem>
              <Input
                placeholder='comment'
                multiline={true}
                numberofLines={4}
                autoCapitalize="sentences"
                autoCorrect={false}
                style={{height: 100}}
                onChangeText={(comment) => this.setState({comment})} />
            </ListItem>

            <ListItem>
              <Button
                block rounded primary
                onPress={this.onPress}
                >Save</Button>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
});

export default SaveLocation;
