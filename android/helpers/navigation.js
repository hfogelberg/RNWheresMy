import React, { Platform } from 'react-native';
import _ from 'underscore';

module.exports = function (scene) {
    var componentMap = {
        'About': {
          title: 'About',
          id: 'About'
        },
        'Locations': {
          title: 'Locations',
          id: 'Locations'
        },
        'Map': {
          title: 'Map',
          id: 'Map'
        },
        'SaveLocation': {
          title: 'SaveLocation',
          id: 'SaveLocation'
        }
    }

    return componentMap[scene];
}
