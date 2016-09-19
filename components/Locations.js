import React, {Component} from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Button,
  Text
} from 'native-base';
import styles from '../styles/styles';
import RealmHelper from '../helpers/realmHelper';

class Locations extends Component {
  constructor(props) {
      super(props);
      this.state = {
        locations: [],
        editMode: false
       };
  }

  componentDidMount() {
    console.log('Mounted');

    let locations = RealmHelper.getItems();
    this.setState({locations});
    console.log(locations.length);
  }

  onLocationPress(location) {
    console.log('onPress', location.name);

    this.props.navigator.push({
     id: 'Map',
     passProps: {
       lat: location.lat,
       lon: location.lon,
       name: location.name,
       comment: location.comment
     }
   });
  }

  renderLocations() {
    return this.state.locations.map((location) => {
      return (
        <ListItem key={location.id}>
          <Button transparent
            onPress={() => this.onLocationPress(location)}>
              {location.name}
          </Button>
        </ListItem>
      )
    });
  }

  render() {
    return (
      <Container>
        <Content style={{marginTop: 70}}>
          <List>
            {this.renderLocations()}
          </List>
        </Content>
      </Container>
    )
  }
}

export default Locations;
