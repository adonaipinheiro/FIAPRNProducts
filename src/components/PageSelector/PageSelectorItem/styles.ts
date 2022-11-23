import {StyleSheet} from 'react-native';

interface StylesTypes {
  isSelected?: boolean;
}

const styles = ({isSelected}: StylesTypes) =>
  StyleSheet.create({
    container: {
      height: 40,
      width: 40,
      padding: 10,
      backgroundColor: isSelected ? '#2f970230' : '#00000010',
      borderRadius: 20,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontWeight: 'bold',
      color: isSelected ? '#2f9702' : '#000000',
    },
  });

export default styles;
