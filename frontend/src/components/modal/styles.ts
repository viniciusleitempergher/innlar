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
      shadowOpacity: 0.5,
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
      borderRadius: 10,
      padding: 10,
      width: '100%',
      marginBottom: 10,
    },

    buttonOpen: {
      backgroundColor: "#01525A",
    },

    buttonClose: {
      backgroundColor: "#B3D3CE",
    },

    buttonSearch:{
      backgroundColor: "#01525A",
      width: "100%",
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
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
      color: "white",
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