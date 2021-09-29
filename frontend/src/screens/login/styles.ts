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
  emailInput: {
    marginTop: '5%'
  },
  passwordInput: {
    marginTop: '12%'
  },
  loginButton: {
    marginTop: '12%',
    marginBottom: 0
  },
  hasntAccount: {
    padding: "7%",
  },
  hasntAccountTxt: {
    textAlign: 'center',
    marginBottom: 15
  },
  peopleIcon: {
    color: 'white',
    fontSize: 80,
    marginBottom: 15
  },

  button: {
    display: 'flex',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 100
  },

  buttonTxt: {
    color: "black",
    textAlign: 'center',
    display:'flex',
    paddingTop: 15,
    fontFamily: fonts.raj500,
    fontSize: 18
  },

  googleButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center'
  },

  googleIcon: {
    fontSize: 30, 
    color: "#666666",
    marginLeft: 20
  },

  googleTxt: {
    color: "black",
    marginLeft: 60,
    fontFamily: fonts.raj500,
    fontSize: 18
  }
});