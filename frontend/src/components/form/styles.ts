import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginTop: 10,
    marginBottom: 10,
    padding: "5%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15
  },
  title: {
    fontFamily: fonts.raj500,
    fontSize: 40,
    color: "white",
    textAlign: 'center',
    letterSpacing: 10
  }
});