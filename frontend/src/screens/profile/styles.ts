import { StyleSheet } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { color } from "react-native-reanimated";
import { colors } from "../../global/styles/colors";

import { fonts } from "../../global/styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    marginBottom: getBottomSpace() + 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputTitle: {
    marginBottom: 5,
    color: "white",
  },
  nameField: {
    marginTop: 15,
  },
  field: {
    marginBottom: 20,
  },

  propertyImage: {
    display: "flex",
    alignSelf: "center",
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginTop: 18,
  },

  information: {
    fontFamily: fonts.raj400,
    color: "black",
    fontSize: 14,
    marginTop: 20,
  },

  line: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginBottom: 10,
  },

  profileTitle: {
    textAlign: "center",
    color: "black",
    fontFamily: fonts.raj500,
    fontSize: 25,
  },

  containerInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  title: {
    color: "black",
    fontFamily: fonts.raj500,
    fontSize: 25,
    textAlign: "center",
    marginTop: 40,
  },

  propertyTitle: {
    textAlign: "left",
    fontFamily: fonts.raj700,
    color: "black",
    fontSize: 20,
    marginBottom: 8,
    marginTop: 12,
  },

  value: {
    textAlign: "left",
    fontFamily: fonts.raj500,
    fontSize: 15,
    color: "black",
  },

  property: {
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonBorder: {
    position: "relative",
    marginTop: -25,
    alignSelf: "center",
    marginLeft: 100,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 2
  },

  border: {
    alignSelf: "center",
    height: 160,
    width: 160,
    borderWidth: 2,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center"
  },

  button: {
    position: "relative",
    marginTop: -35,
    alignSelf: "center",
    marginLeft: 110,

  },

  borderTwo: {
    position: "absolute",    
    bottom: 10,
    right: 10,
    borderWidth: 2,
    borderRadius: 34,
    borderColor: "black",
    padding: 9,
    backgroundColor: colors.title,
  },
});
