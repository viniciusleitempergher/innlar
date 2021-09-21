import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
    centeredView: {
      display: "flex",
      justifyContent: "center",
      marginTop: 22
    },

    innlarIcon: {
      display: "flex",
      alignSelf: "center",
      marginBottom: 5,
      width: 100,
      height: 100
    },

    modal:{
      display: "flex",
      width: "80%",
      height: "100%",
      alignSelf: "flex-end"
    },

    modalView: {
      height: '100%',
      width: "100%",
      margin: 20,
      backgroundColor: "#B3D3CE",
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


    buttonClose: {
      backgroundColor: "#B3D3CE",
    },

    iconClose: {
        display: "flex",
        alignSelf: "flex-start"
      },

    button:{
      backgroundColor: "#01525A",
      width: "95%",
      borderRadius: 10,
      padding: 15,
      marginBottom: 15,
    },


    buttonsModalClose:{
      display: "flex",
      flexDirection: 'row',
      alignItems: "center"
    },

    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: fonts.raj700
    },

    modalText: {
      marginTop: 20,
      marginBottom: 5,
      marginLeft: 7,
      fontSize: 24,
      textAlign: "left",
      fontFamily: fonts.raj700,
      color: "#01525A"
    },

    barsIcon: {
        display: "flex",
        alignSelf: "flex-end"
    },
  });