import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  container: {
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
  title: { 
    fontFamily: fonts.raj500,
    fontSize: 40,
    color: colors.title,
    textAlign: 'center',
    letterSpacing: 10
  },

  inputName: {
    textAlign: 'center',
    color: colors.inputTxt,
    fontSize: 18
  },

  steps: {
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 20,
    fontFamily: fonts.raj500
  },
  
  description: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
    fontFamily: fonts.raj500
  },

  smallDescription: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20, 
  fontFamily: fonts.raj500,
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
  },



blueBall: {
  backgroundColor: colors.darkGreen,
  height: 15,
  width:15,
  borderRadius: 100,
  borderColor: "black",
  borderWidth: 1,
  marginTop: 8
},

balls: {
  marginTop:10,
  marginEnd: 90,
  marginStart: 90,
  display: "flex",
  flexDirection: 'row',
  alignItems: "center",
  justifyContent:"space-between"
},

button: {
  display: 'flex',
  width: '85%',
  flexDirection: 'row',
  alignSelf: "center",
  justifyContent: "center",
  height: 45,
  backgroundColor: colors.darkGreen,
  borderRadius: 100,
  marginTop: 26,
  
},

buttonTxt: {
  color: "white",
  textAlign: 'center',
  display:'flex',
  paddingTop: 10,
  fontFamily: fonts.raj500,
  fontSize: 18,
},

  buttons:{
      display: "flex",
      flexDirection: 'row',
      alignItems: "center",
      justifyContent:"space-between"

  },

  inputImageIcon: {
    paddingTop: 15,
    display: "flex",
    flexDirection: 'row',
    alignSelf: "center",
    fontSize: 80,
    color: "#7A7A7A"
  }

});