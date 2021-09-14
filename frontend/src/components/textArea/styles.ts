import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 8,
    fontFamily: fonts.raj500,
    fontSize: 13,
    marginRight: 4,
    paddingHorizontal: 16,
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});