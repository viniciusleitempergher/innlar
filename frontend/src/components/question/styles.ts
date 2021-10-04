import { StyleSheet } from 'react-native';
import { fonts } from '../../global/styles/fonts';
import { colors } from '../../global/styles/colors'

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
    height: 30,
    borderColor:"black",
    borderWidth:0.5,
    backgroundColor: '#fff',
    color: colors.inputTxt,
    borderRadius: 8,
    fontFamily: fonts.raj500,
    fontSize: 18,
    marginRight: 20,
    paddingHorizontal: 16,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  smallDescription: {
    fontFamily: fonts.raj500,
    fontSize: 16,
    marginHorizontal: 3,
    marginLeft: 10
  },
});