import { StyleSheet } from 'react-native';

import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputTitle: {
    marginBottom: 5,
    color: 'white'
  },
  nameField: {
    marginTop: 15
  },
  field: {
    marginBottom: 20
  },
  button: {
    display: 'flex',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 100
  },

  buttonTxt: {
    color: "black",
    textAlign: 'center',
    display:'flex',
    paddingTop: 15,
    fontFamily: fonts.raj500,
    fontSize: 18
  }
});