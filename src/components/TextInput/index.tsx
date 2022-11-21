import React from 'react';
import {Text, TextInput as RNTextInput, TextInputProps} from 'react-native';

// Styles
import styles from './styles';

interface ITextInput extends TextInputProps {
  messageError?: string;
}

export default function TextInput(props: ITextInput) {
  return (
    <>
      <RNTextInput
        style={styles({messageError: props.messageError}).textInput}
        {...props}
      />
      {props.messageError && (
        <Text style={styles({}).errorText}>{props.messageError}</Text>
      )}
    </>
  );
}
