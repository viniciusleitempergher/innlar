import { StyleSheet } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { fonts } from "../../global/styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
  },
  sendArea: {
    height: "7%",
    flexDirection: "row",
    paddingTop: 6,
  },
  sendInput: {
    fontFamily: fonts.raj500,
    fontSize: 18,
    paddingLeft: 15,
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 50,
    position: "relative",
    marginLeft: 10,
  },
  list: {
    maxHeight: "86%",
  },

  userName: {
    fontFamily: fonts.raj700,
    fontSize: 18,
  },

  userYou: {
    fontFamily: fonts.raj700,
    fontSize: 18,
    textAlign: "right"
  },

  message: {
    fontFamily: fonts.raj500,
    fontSize: 16,
  },

  date: {
    fontFamily: fonts.raj400,
    fontSize: 14,
    textAlign:"right"
  },

  balloon: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  
  profileIcon: {
    fontSize: 80,
    marginLeft: -5,
    marginTop: 3,
    
  },

});
