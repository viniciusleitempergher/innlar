import { StyleSheet } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { colors } from '../../global/styles/colors';

import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),    
    width: '100%',
    marginBottom: getBottomSpace() + 20,
    height: 1200,
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
    flexDirection: 'row',
    justifyContent: "center"
  },

  property: {
    flexDirection: 'column',
    justifyContent: "center"
  },

  propertyImage: {
    alignSelf: "center",
    width: "100%",
    marginTop: 12,
    height: 240,
    borderRadius: 8
  },

  propertyTitle: {
    textAlign: "left",
    fontFamily: fonts.raj700,
    color: "#000",
    fontSize: 21,
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
    height: 105,
    color: '#000',
    fontFamily: fonts.raj500,
    fontSize: 15,
    textAlignVertical: 'center',
    textAlign: 'justify',
    marginBottom: 30
  },

  description: {
    width: '100%',
    color: '#000',
    fontFamily: fonts.raj700,
    fontSize: 16,
    textAlignVertical: 'center',
    textAlign: 'left',
    marginTop: 15,
    marginBottom: 10
  },

  roomIcons: {
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
  },

  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16
  },

  textIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: -5
  },

  carIcon:{
    marginRight: -20
  },

  titleDescription: {
    color: "#000",
    marginTop: 30,
    fontSize: 18,
    fontFamily: fonts.raj700,
    marginBottom: 3
  },

  title: {
    color: "#000",
    fontFamily: fonts.raj700,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 3
  },

  text: {
    fontFamily: fonts.raj500,
    fontSize: 15
  },

  profile: {
    fontFamily: fonts.raj500,
    fontSize: 16,
    textAlign: "center"

  },

  email: {
    fontFamily: fonts.raj400,
    textAlign: "center"
  },

  stars: {
    display: "flex",
    flexDirection: "row",
  },

  

});