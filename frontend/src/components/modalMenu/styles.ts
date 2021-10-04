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
      backgroundColor: "#EEE6DC",
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
      backgroundColor: "#EEE6DC",
    },

    iconClose: {
        display: "flex",
        alignSelf: "flex-start"
      },

    button:{
      backgroundColor: "#E8D6BE",
      width: "75%",
      borderRadius: 20,
      padding: 10,
      marginBottom: 20,
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

    barsIcon: {
        display: "flex",
        alignSelf: "flex-end"
    },
    userImage:{
      paddingTop:50,
      paddingBottom:30,
      fontSize: 90,
      textAlign: "center",
      color:"gray"
    },
    button1:{
      marginTop:120,
      backgroundColor: "#E8D6BE",
      width: "75%",
      borderRadius: 20,
      padding: 10,
      marginBottom: 20,
    }
  });