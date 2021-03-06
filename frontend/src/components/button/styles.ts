import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';


export const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 50,
    backgroundColor: "white",
    borderRadius: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    color: "black",
    width: '100%',
    textAlign: 'center',
    fontFamily:  fonts.raj500
  }
});