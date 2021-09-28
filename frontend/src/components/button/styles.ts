import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: "white",
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    color: "black",
    width: '100%',
    textAlign: 'center'
  }
});