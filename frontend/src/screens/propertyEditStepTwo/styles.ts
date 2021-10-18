import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';
import { colors } from '../../global/styles/colors';

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
    steps: {
        textAlign: "center",
        textDecorationLine: "underline",
        fontSize: 20,
        fontFamily: fonts.raj500,
    },
    description: {
        textAlign: "center",
        fontSize: 18,
        marginTop: 20,
        fontFamily: fonts.raj500,
    },
    smallDescription: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 6,
        fontFamily: fonts.raj500,
    },

    line: {
        marginVertical: 20,
        borderBottomColor: '#01525A',
        borderBottomWidth: 1,
    },

    inputAddress:{
        width: '100%',
        height: 30,
        backgroundColor: 'transparent',
        borderRadius: 8,  
        fontFamily: fonts.raj500,
        color: colors.inputTxt,
        fontSize: 18,
        textAlignVertical: 'center',
        textAlign: 'center',
        borderBottomColor: "gray",
        borderLeftColor: 'transparent',
        borderRightColor:'transparent',
        borderTopColor: 'transparent',
        borderWidth: 1,
    },

    ball: {
      backgroundColor: "transparent",
      height: 15,
      width:15,
      borderRadius: 100,
      borderColor: "black",
      borderWidth: 1,
      marginTop: 8
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

    }
  });