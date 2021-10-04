import { StyleSheet } from 'react-native';

import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
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
    line: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    propertyTitle: {
        textAlign: "left",
        fontFamily: fonts.raj700,
        color: "black",
        fontSize: 20,
        marginBottom: 8,
        marginTop: 12
    },
    property: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center"
    },
});

