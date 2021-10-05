import { StyleSheet } from "react-native";
import { fonts } from "../../global/styles/fonts";

export const styles = StyleSheet.create({
container: {
    display: 'flex',
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
},

header: {
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    height: 90,
    backgroundColor: "#B9A78D",
    marginBottom: 20
},

iconTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 15
},

title: {
    fontFamily: fonts.raj500,
    fontSize: 30,
    marginLeft: 20
},

chat: {
    display: "flex",
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
},

texts: {
    marginLeft: 20
},
name: {
    fontFamily: fonts.raj500,
    fontSize: 20,
    marginTop: 8
},

lastMessage: {
    fontFamily: fonts.raj500,
    fontSize: 16,
    color: 'gray'
},

line: {
    borderWidth: 0.5,
    borderColor:'#878787',
    width: '90%',
    marginBottom: 20
}


});
