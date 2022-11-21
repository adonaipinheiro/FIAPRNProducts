import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import TextInput from '../../components/TextInput';

// Styles
import styles from './styles';

// Images
import {Logo} from '../../assets';
import useSignIn from './hooks/useSignIn';
import {Formik} from 'formik';

export default function SignIn() {
  const {handleSignUp, handleSubmitForm, insets, LoginSchema} = useSignIn();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles({}).container}>
      <View style={styles({}).logoArea}>
        <Image style={styles({}).logoImg} source={Logo} />
      </View>
      <Formik
        initialValues={{email: '', pass: ''}}
        validationSchema={LoginSchema}
        onSubmit={({email, pass}, {setSubmitting}) =>
          handleSubmitForm(email, pass, setSubmitting)
        }>
        {({values, handleSubmit, errors, handleChange, isSubmitting}) => (
          <>
            <View style={styles({}).textInputArea}>
              <TextInput
                value={values.email}
                onChangeText={handleChange('email')}
                messageError={errors.email}
                placeholder="E-mail"
                autoCapitalize="none"
                keyboardType="email-address"
              />
              <TextInput
                value={values.pass}
                onChangeText={handleChange('pass')}
                messageError={errors.pass}
                placeholder="Senha"
                secureTextEntry
              />
            </View>
            <View style={styles({}).buttonsArea}>
              <TouchableOpacity
                disabled={isSubmitting}
                onPress={handleSubmit}
                style={styles({loading: isSubmitting}).buttonSignIn}>
                <Text style={styles({}).buttonSignInText}>
                  {isSubmitting ? 'Carregando...' : 'Entrar'}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
      <TouchableOpacity
        onPress={handleSignUp}
        style={styles({insets}).buttonSignUp}>
        <Text style={styles({}).buttonSignUpText}>Cadastrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
