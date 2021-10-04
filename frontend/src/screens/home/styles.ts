import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputTitle: {
    marginBottom: 5
  },
  nameField: {
    marginTop: 15,
  },
  field: {
    marginBottom: 20
  },

  innlarIcon: {
    display: "flex",
    alignSelf: "center",
    marginBottom: 5,
    width: 120,
    height: 120
  },

  searchProperty: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center"
  },

  searchButton: {
    width: '105%',
    height: 40,
    backgroundColor: colors.darkGreen,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },

  property: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center"
  },

  propertyImage: {
    display: "flex",
    alignSelf: "center",
    width: "100%",
    height: 240,
    borderRadius: 8
  },

  propertyTitle: {
    textAlign: "left",
    fontFamily: fonts.raj700,
    color: "#01525A",
    fontSize: 20,
    marginBottom: 8,
    marginTop: 12
  },

  value: {
    textAlign: "left",
    fontFamily: fonts.raj500,
    fontSize: 15,
    color: "#01525A"
},

inputDescription:{
  width: '100%',
  height: 125,
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: 8,  
  fontFamily: fonts.raj500,
  fontSize: 13,
  marginRight: 4,
  paddingHorizontal: 16,
  textAlignVertical: 'center',
  textAlign: 'center'
},

line: {
    borderBottomColor: '#01525A',
    borderBottomWidth: 1,
    marginBottom: 10
}
});