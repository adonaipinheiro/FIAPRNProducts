import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

interface ISignInStyles {
  loading?: boolean;
  insets?: EdgeInsets;
}

const styles = ({loading, insets}: ISignInStyles) =>
  StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
    },
    logoArea: {
      marginBottom: 15,
    },
    logoImg: {
      width: 150,
      height: 150,
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
      width: '90%',
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
      position: 'absolute',
      minWidth: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#2f9702',
      padding: 10,
      borderRadius: 4,
      marginTop: 40,
      bottom: insets ? insets.bottom + 15 : 0,
    },
    buttonSignUpText: {
      color: '#2f9702',
    },
  });

export default styles;
