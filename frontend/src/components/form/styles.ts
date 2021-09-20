import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginTop: 10,
    marginBottom: 10,
    padding: "5%",
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 15
  },
  title: {
    fontFamily: fonts.raj700,
    fontSize: 40,
    color: colors.primary,
    textAlign: 'center'
  }
});