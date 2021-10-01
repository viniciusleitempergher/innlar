import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles/colors';
import { fonts } from '../../global/styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  innlarIcon: {
    display: "flex",
    alignSelf: "center",
    marginTop: 50,
    width: 120,
    height: 120
  },
  inicial: {
      display:"flex",
      paddingTop: 400
  },
  findYourPlaceTxt: {
    fontSize: 25,
    fontFamily: fonts.raj700,
    color: 'white',
    marginBottom: 20,
    textShadowColor: 'black', 
    textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 10,
  },
 
  button: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 100
  },

  buttonTxt: {
    color: "black",
    textAlign: 'center',
    display:'flex',
    paddingTop: 12,
    fontFamily: fonts.raj500,
    fontSize: 30
  },

  viewButton:{
    display: 'flex',
    alignSelf: 'center',
    marginTop: 400
  }

});