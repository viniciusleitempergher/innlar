import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: { 
      fontFamily: fonts.raj500,
      fontSize: 40,
      color: colors.title,
      textAlign: 'center',
      letterSpacing: 10
    },
    inputTitle: {
      marginBottom: 5
    },
      nameField: {
        marginTop: 15
      },
    field: {
      marginBottom: 20
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
        marginBottom: 15,
        fontFamily: fonts.raj500,
    },
    smallDescription: {
        textAlign: "center",
        fontSize: 16,
        marginBottom: 15,
      fontFamily: fonts.raj500,
    },

    line: {
        borderBottomColor: '#01525A',
        borderBottomWidth: 1,
    },

    inputName: {
      textAlign: 'center',
      fontSize: 18, 
      color: colors.inputTxt
    },

    inputDescription:{
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        color: colors.inputTxt,
        borderRadius: 8,  
        fontFamily: fonts.raj500,
        fontSize: 18,
        marginRight: 4,
        paddingHorizontal: 16,
        textAlignVertical: 'center',
        textAlign: 'center'
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
      width: '70%',
      flexDirection: 'row',
      alignSelf: "center",
      justifyContent: "center",
      height: 45,
      backgroundColor: colors.darkGreen,
      borderRadius: 100,
      marginTop: 50
    },
  
    buttonTxt: {
      color: "white",
      textAlign: 'center',
      display:'flex',
      paddingTop: 10,
      fontFamily: fonts.raj500,
      fontSize: 18
    }
  });