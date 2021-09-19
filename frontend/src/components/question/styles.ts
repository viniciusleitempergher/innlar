import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  viewInput: {
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8
  },
  inputNumber: {
    width: '25%',
    height: 25,
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 8,
    fontFamily: fonts.raj500,
    fontSize: 13,
    marginRight: 20,
    paddingHorizontal: 16,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  smallDescription: {
    fontSize: 14,
    marginHorizontal: 3,
    marginLeft: 10
  },
});