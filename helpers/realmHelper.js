import React from 'react';
import Realm from 'realm';
import Moment from 'moment';
import _ from 'underscore';

let realm = new Realm({
  schema: [{
    name: 'Locations',
    properties: {
      id: 'string',
      name: 'string',
      comment: 'string',
      lat: 'float',
      lon: 'float',
      date: 'date'
    }}]
});

export default class RealmHelper {
  static saveItem(item) {
    console.log('Save input', realm.path);
    let id = (new Date).getTime().toString();
    console.log('ID: ' + id);

    try{
      realm.write(() => {
        realm.create('Locations', {
          id: id,
          name: item.name,
          comment: item.comment,
          lat: item.lat,
          lon: item.lon,
          date: new Date()
        })
      });
    } catch(err) {
      console.log('Error saving to Realm', err);
    }
  }

  static getItems() {
    let items = realm.objects('Locations');
    return items;
  }
}
