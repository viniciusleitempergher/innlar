import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { colors } from '../../global/styles/colors';

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
  field: {
    marginBottom: 20
  },

  searchProperty: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center"
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
    marginTop: 12,
    height: 240,
    borderRadius: 8
  },

  propertyTitle: {
    textAlign: "left",
    fontFamily: fonts.raj700,
    color: "#01525A",
    fontSize: 25,
    marginBottom: 8,
    marginTop: 12
  },

  value: {
    textAlign: "left",
    fontFamily: fonts.raj700,
    fontSize: 15,
    color: "#01525A",
    marginBottom: 5
  },

  propertyDescription: {
    width: '100%',
    height: 120,
    color: '#000',
    borderRadius: 8,
    borderColor: "#01525A",
    borderWidth: 1,
    fontFamily: fonts.raj500,
    fontSize: 13,
    padding: 15,
    textAlignVertical: 'center',
    textAlign: 'center',
    marginTop: 10
  },

  description: {
    width: '100%',
    color: '#000',
    fontFamily: fonts.raj500,
    fontSize: 16,
    textAlignVertical: 'center',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10
  },

  roomIcons: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10
  },

  roomIconsText: {
    marginTop: 5,
    marginLeft: 5
  },

  line: {
    borderBottomColor: '#01525A',
    borderBottomWidth: 1,
    marginBottom: 10
  }
});