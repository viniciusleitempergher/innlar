import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles/colors';

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
    padding: "12%",
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
  googleButton: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },

  googleIcon: {
    fontSize: 24, 
    color: "black",
    marginLeft: 20
  },

  googleTxt: {
    color: "black",
    marginLeft: 75
  }
});