import { StyleSheet } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    marginBottom: getBottomSpace() + 15,
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
 

  propertyImage: {
    display: "flex",
    alignSelf: "center",
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginTop: 18
  },

  information: {
    fontFamily: fonts.raj400,
    color: "black",
    fontSize: 14, 
    marginTop: 20
  },

  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 10,
},

  profileIcons: {
    flexDirection: "row",
    marginBottom: 10,
   alignSelf: "center"
},

  profileTitle: {
    textAlign: "center",
    color: "black",
    fontFamily: fonts.raj500,
    fontSize: 25
  },

  containerInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },

  title: {
    color: "black",
    fontFamily: fonts.raj500,
    fontSize: 25,
    textAlign: "center",
    marginTop: 40
  },

  propertyTitle: {
    textAlign: "left",
    fontFamily: fonts.raj700,
    color: "black",
    fontSize: 20,
    marginBottom: 8,
    marginTop: 12
  },

  value: {
    textAlign: "left",
    fontFamily: fonts.raj500,
    fontSize: 15,
    color: "black"
  },

  property: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center"
  },
});

