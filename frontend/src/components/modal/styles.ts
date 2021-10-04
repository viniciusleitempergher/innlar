import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 25,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.8,
      shadowRadius: 90,
      elevation: 5
    },

    buttons: {
      marginTop: 10,
      marginBottom: 10,
      display: "flex",
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },

    button: {
      borderRadius: 100,
      padding: 10,
      width: '100%',
      marginBottom: 10,
    },

    buttonOpen: {
      backgroundColor: "#EEE6DC",
      borderColor:"#919191",
      borderWidth:1,
    },

    buttonClose: {
      backgroundColor: "#A5BDA2"
    },

    buttonSearch:{
      backgroundColor: "#B9A78D",
      width: "100%",
      borderRadius: 20,
      padding: 10,
      marginBottom: 15,
    },

    buttonsModalClose:{
      display: "flex",
      flexDirection: 'row',
      alignItems: "center"
    },

    iconClose: {
      display: "flex",
      alignSelf: "flex-end"
    },

    textStyle: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: fonts.raj700
    },

    modalText: {
      marginTop: 20,
      marginBottom: 20,
      fontSize: 18,
      textAlign: "center",
      fontFamily: fonts.raj500
    }
  });