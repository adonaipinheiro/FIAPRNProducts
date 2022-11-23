import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

interface StylesTypes {
  insets?: EdgeInsets;
}

const styles = ({insets}: StylesTypes) =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      position: 'relative',
      justifyContent: 'flex-start',
    },
    userContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    userText: {
      marginTop: 10,
      fontWeight: 'bold',
    },
    signOutButton: {
      margin: 10,
      padding: 10,
      paddingVertical: 15,
      position: 'absolute',
      backgroundColor: '#00000009',
      borderRadius: 4,
      width: '92%',
      bottom: insets ? insets.bottom + 15 : 0,
    },
    signOutButtonText: {
      fontWeight: 'bold',
      color: 'red',
    },
  });

export default styles;
