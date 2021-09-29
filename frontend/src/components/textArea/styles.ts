import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    borderBottomColor: "white",
    borderLeftColor: 'transparent',
    borderRightColor:'transparent',
    borderTopColor: 'transparent',
    borderWidth: 1,
    fontFamily: fonts.raj500,
    color: 'white',
    fontSize: 16,
    marginRight: 4,
    paddingHorizontal: 16,
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});