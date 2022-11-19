import React from 'react';
import {
  Text,
  TextInput as RNTextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';

// Styles
import styles from './styles';

interface ITextInput extends TextInputProps {
  messageError?: string;
}

export default function TextInput(props: ITextInput) {
  const errorStyle: ViewStyle = {
    borderColor: 'red',
  };

  return (
    <>
      <RNTextInput
        style={[styles.textInput, props.messageError ? errorStyle : null]}
        {...props}
      />
      {props.messageError && (
        <Text style={styles.errorText}>{props.messageError}</Text>
      )}
    </>
  );
}
