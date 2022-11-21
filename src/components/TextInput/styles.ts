import {StyleSheet} from 'react-native';

interface IError {
  messageError?: string;
}

const styles = ({messageError}: IError) =>
  StyleSheet.create({
    textInput: {
      marginTop: 10,
      width: '100%',
      borderWidth: 1,
      borderColor: messageError ? 'red' : '#CCC',
      borderRadius: 4,
      padding: 10,
      backgroundColor: '#FFF',
    },
    errorText: {
      color: 'red',
      marginTop: 5,
      marginLeft: 5,
    },
  });

export default styles;
