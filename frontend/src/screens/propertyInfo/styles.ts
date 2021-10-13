import { StyleSheet } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { TextArea } from '../../components/textArea';
import { colors } from '../../global/styles/colors';

import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
    width: '100%',
    marginBottom: getBottomSpace() + 20,
    height: 1400,
    alignItems: 'center',
    justifyContent: 'center',
    
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
    height: 240,
    borderRadius: 8,
    opacity: 0.1,
    backgroundColor: '#000000'
    
  },

  propertyTitle: {
    textAlign: "left",
    fontFamily: fonts.raj700,
    color: colors.title,
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
    color: colors.title,
    fontFamily: fonts.raj500,
    fontSize: 15,
    textAlignVertical: 'center',
    textAlign: 'justify',
    marginBottom: 30
  },

  description: {
    width: '100%',
    fontFamily: fonts.raj700,
    fontSize: 16,
    textAlignVertical: 'center',
    textAlign: 'left',
    marginTop: 15,
    marginBottom: 10,
    color: colors.title
  },

  roomIcons: {
    flexDirection: "row",
    marginBottom: 10
  },

  roomIconsText: {
    marginTop: 5,
    color: '#764D35',
    fontFamily: fonts.raj400
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
    marginHorizontal: -5,
    marginBottom: 25,
  },

  carIcon: {
    marginRight: -20
  },

  titleDescription: {
    color: colors.title,
    marginTop: 5,
    fontSize: 18,
    fontFamily: fonts.raj700,
    marginBottom: 3
  },

  title: {
    fontFamily: fonts.raj700,
    fontSize: 18,
    marginTop: 15,
    marginBottom: 3,
    color: colors.title
  },

  text: {
    fontFamily: fonts.raj500,
    fontSize: 15,
    color: colors.title
  },

  profile: {
    fontFamily: fonts.raj500,
    fontSize: 16,
    textAlign: "center",
    color: colors.title
  },

  email: {
    fontFamily: fonts.raj400,
    textAlign: "center",
    color: colors.title
  },

  stars: {
    display: "flex",
    flexDirection: "row",
  },

  button: {
    width: '30%',
    height: 30,
    borderRadius: 20,
    fontFamily: fonts.raj500,
    color: '#fff',
    fontSize: 18,
    textAlignVertical: 'center',
    alignSelf: "center",
    backgroundColor: "#764D35",
    textAlign: 'center',
    marginTop: 18
  },

  textButton: {
    marginTop: 6,
    alignSelf: "center",
    fontFamily: fonts.raj500,
    color: '#fff',
  },

  arrow: {
    color: '#575757'
  },

  colorIcons: {
    color: '#764D35'
  },

  textInput: {
    fontSize: 20,
    fontFamily: fonts.raj700,
    color: colors.title,
    zIndex: 1,
  },

  alugueButton: {
    width: 100,
    height: 28,
    borderRadius: 20,
    fontFamily: fonts.raj500,
    color: '#fff',
    fontSize: 18,
    alignSelf: "center",
    backgroundColor: "#764D35",
    marginRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  alugueAgora: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: '80%',
    height: 50,
    borderRadius: 50,
    fontFamily: fonts.raj500,
    color: colors.inputTxt,
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: "#B9A78D",
    marginTop: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    bottom: 10,
    fontWeight: "400",
    
  },

  textButton2: {
    alignSelf: "center",
    fontFamily: fonts.raj500,
    color: '#fff',
  }
});