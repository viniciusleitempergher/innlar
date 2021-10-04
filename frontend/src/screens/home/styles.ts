import { StyleSheet } from "react-native";
import { colors } from "../../global/styles/colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { fonts } from "../../global/styles/fonts";

export const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputTitle: {
    marginBottom: 5,
  },
  nameField: {
    marginTop: 15,
  },
  field: {
    marginBottom: 20,
  },

  innlarIcon: {
    display: "flex",
    alignSelf: "center",
    marginBottom: 5,
    width: 120,
    height: 120,
  },

  searchProperty: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  searchButton: {
    width: "105%",
    height: 40,
    backgroundColor: colors.darkGreen,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  property: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  propertyImage: {
    display: "flex",
    alignSelf: "flex-start",
    width: "100%",
    height: 200,
    borderRadius: 4,
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
    fontSize: 18,
    color: "black",
    marginBottom: 10,
  },

  inputDescription: {
    width: "100%",
    height: 125,
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 8,
    fontFamily: fonts.raj500,
    fontSize: 13,
    marginRight: 4,
    paddingHorizontal: 16,
    textAlignVertical: "center",
    textAlign: "center",
  },

  line: {
    borderBottomColor: "#919191",
    borderBottomWidth: 1,
    marginBottom: 20,
  },

  icon: {
    fontSize: 24,
    color: "#666666",
    marginRight: 10,
  },

  info: {
    display: "flex",
    flexDirection: "row",
  },

  info1: {
    fontSize: 18,
    fontFamily: fonts.raj500,
  },
  info2: {
    fontSize: 18,
    fontFamily: fonts.raj500,
    marginTop: 10,
    textDecorationLine:"underline",
    textAlign:"center"
  },

});
