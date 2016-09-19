import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    marginTop: 70,
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  locationContainer: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    flex: 7
  },
  inputForm: {
    flex: 1,
    alignSelf: 'stretch',
  },
  buttonContainer: {
    padding:10,
    height:45,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'gray'
  },
  button: {
    fontSize: 20,
    color: 'yellow'
  },
  buttonDisabled: {
    color: 'red'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
