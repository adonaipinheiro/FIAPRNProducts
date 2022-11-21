import {Platform, StatusBar, StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

interface ISignUpStyles {
  insets?: EdgeInsets;
  loading?: boolean;
}

const styles = ({insets, loading}: ISignUpStyles) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: -50,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
    },
    logoArea: {
      marginBottom: 15,
    },
    logoImg: {
      width: 125,
      height: 125,
    },
    textInputArea: {
      width: '90%',
    },
    textInput: {
      marginTop: 10,
      width: '90%',
      borderWidth: 1,
      borderColor: '#CCC',
      borderRadius: 4,
      padding: 10,
      backgroundColor: '#FFF',
    },
    buttonsArea: {
      width: '100%',
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonSignIn: {
      minWidth: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#2f9702',
      borderRadius: 4,
      opacity: loading ? 0.1 : 1,
    },
    buttonSignInText: {
      color: '#FFF',
    },
    buttonSignUp: {
      minWidth: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#2f9702',
      padding: 10,
      marginTop: 30,
      borderRadius: 4,
    },
    buttonSignUpText: {
      color: '#2f9702',
    },
    goBackButton: {
      position: 'absolute',
      left: 15,
      top:
        Platform.OS === 'android'
          ? StatusBar.currentHeight
          : insets
          ? insets.top + 60
          : 0,
    },
    goBackButtonText: {
      color: '#2f9702',
    },
  });

export default styles;
