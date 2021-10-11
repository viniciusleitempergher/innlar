import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  nameField: {
    marginTop: 15,
  },
  field: {
    marginBottom: 20,
  },
  property: {
    flexDirection: "column",
    justifyContent: "center",
  },
  propertyImage: {
    alignSelf: "flex-start",
    width: "100%",
    height: 200,
    borderRadius: 4,
  },
  line: {
    borderBottomColor: "#919191",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  info: {
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
    textDecorationLine: "underline",
    textAlign: "center"
  },
  icon: {
    fontSize: 24,
    color: "#666666",
    marginRight: 10,
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
});