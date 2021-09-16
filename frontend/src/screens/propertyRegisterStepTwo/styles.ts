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
    steps: {
        textAlign: "center",
        textDecorationLine: "underline",
        fontSize: 20
    },
    description: {
        textAlign: "center",
        fontSize: 16,
        marginTop: 20,
    },
    smallDescription: {
        fontSize: 14,
        marginBottom: 5,
        marginTop: 5
    },

    line: {
        marginTop: 15,
        borderBottomColor: '#01525A',
        borderBottomWidth: 1,
    },

    inputAddress:{
        width: '100%',
        height: 30,
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

    ball: {
        backgroundColor: "#98CACF",
        height: 20,
        width:20,
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 3,
        marginTop: 8
    },

    blueBall: {
      backgroundColor: "#01525A",
      height: 20,
      width:20,
      borderRadius: 100,
      borderColor: "white",
      borderWidth: 3,
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

    button:{
        width: '48%',
        height: 40,
        backgroundColor: colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },

    buttons:{
        marginTop:10,
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent:"space-between"
    }
  });