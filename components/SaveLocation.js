import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import styles from '../styles/styles';
import Realm from 'realm';
import Button from 'react-native-button'
import {
    GiftedForm,
    GiftedFormManager
} from 'react-native-gifted-form';

let realm = new Realm({
  schema: [{
    name: 'Locations',
    properties: {
      name: 'string',
      comment: 'string',
      lat: 'float',
      lon: 'float'
    }}]
});

const SaveLocation = React.createClass({
  getInitialState: function() {
    return {
      formData: {},
      lat: 0,
      lon: 0,
      location: 'Fetching current location ...'
    };
  },

  componentDidMount: function() {
    this.fetchLocation();
  },

  fetchLocation: function() {
    console.log('refreshLocation');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = position.coords;
        console.log(coords);
        if (coords != null) {
          this.setState({
            lon: coords.longitude,
            lat: coords.latitude,
            location: 'Lat: ' + coords.latitude + ', Lon: ' + coords.longitude
          });
        }
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  },

  saveFormData: function(caption, comment) {
    console.log('Save input', realm.path);
    console.log(caption + ' ' + comment);

    realm.write(() => {
      realm.create('Locations', {
        name: caption,
        comment: comment,
        lat: this.state.lat,
        lon: this.state.lon
      })
    });
  },

  renderForm: function() {
    return (
      <GiftedForm
        formName='locationForm'
        validators={{
          caption: {
            title: 'Caption',
            validate: [{
              validator: 'isLength',
              arguments: [3, 23],
              message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
            }]
          }
        }}

        defaults={{
          caption: ''
        }}
      >

      <GiftedForm.SeparatorWidget />
        <GiftedForm.TextInputWidget
          name='caption'
          autoComplete={false}
          autoCorrect={false}
          autoCapitalize="sentences"
          spellcheck={false}
          title='Caption'
          clearButtonMode='while-editing'
          autoFocus={true}
        />


      <GiftedForm.SeparatorWidget/>

        <GiftedForm.TextAreaWidget
            autoComplete={false}
            autoCorrect={false}
            autoCapitalize="sentences"
            spellcheck={false}
            name='comment'
            title='Comment'
            placeholder='Some reminder'
            clearButtonMode='while-editing'
          />

        <GiftedForm.SubmitWidget
          title='Save'
          widgetStyles={{
            submitButton: {
              backgroundColor: 'orange',
            }
          }}
          onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
            if (isValid === true) {
              console.log('Valid');
              postSubmit();
              GiftedFormManager.reset('locationForm');
              this.saveFormData(values.caption, values.comment)
            } else {
              console.log('Not valid');
            }
          }}
        />
      </GiftedForm>
    )
  },

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Save Location</Text>
        </View>
        <View style={styles.locationContainer}>
          <Text>{this.state.location}</Text>
        </View>
        <View style={styles.formContainer}>
          {this.renderForm()}
        </View>
      </View>
    )
  }
});

export default SaveLocation;
