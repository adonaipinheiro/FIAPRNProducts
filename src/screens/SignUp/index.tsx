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
import useSignUp from './hooks/useSignUp';

// Styles
import styles from './styles';

// Images
import {Logo} from '../../assets';
import {Formik} from 'formik';

export default function SignUp() {
  const {handleGoBack, handleSignIn, SignUpSchema, insets, handleSubmitForm} =
    useSignUp();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles({}).container}>
      <TouchableOpacity
        style={styles({insets}).goBackButton}
        onPress={handleGoBack}>
        <Text style={styles({}).goBackButtonText}>Voltar</Text>
      </TouchableOpacity>
      <View style={styles({}).logoArea}>
        <Image style={styles({}).logoImg} source={Logo} />
      </View>
      <Formik
        initialValues={{
          name: '',
          tel: '',
          email: '',
          pass: '',
          confirmPass: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={({name, tel, email, pass}, {setSubmitting}) =>
          handleSubmitForm(name, tel, email, pass, setSubmitting)
        }>
        {({handleSubmit, values, handleChange, errors, isSubmitting}) => (
          <View style={styles({}).textInputArea}>
            <TextInput
              value={values.name}
              onChangeText={handleChange('name')}
              messageError={errors.name}
              placeholder="Nome"
            />
            <TextInput
              value={values.tel}
              onChangeText={handleChange('tel')}
              placeholder="Telefone"
              messageError={errors.tel}
              keyboardType="phone-pad"
            />
            <TextInput
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder="E-mail"
              keyboardType="email-address"
              messageError={errors.email}
              autoCapitalize="none"
            />
            <TextInput
              value={values.pass}
              onChangeText={handleChange('pass')}
              placeholder="Senha"
              messageError={errors.pass}
              secureTextEntry
            />
            <TextInput
              value={values.confirmPass}
              onChangeText={handleChange('confirmPass')}
              placeholder="Digite novamente sua senha"
              messageError={errors.confirmPass}
              secureTextEntry
            />
            <View style={styles({}).buttonsArea}>
              <TouchableOpacity
                disabled={isSubmitting}
                onPress={handleSubmit}
                style={styles({loading: isSubmitting}).buttonSignIn}>
                <Text style={styles({}).buttonSignInText}>
                  {isSubmitting ? 'Carregando...' : 'Cadastrar'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
      <TouchableOpacity
        onPress={handleSignIn}
        style={styles({insets}).buttonSignUp}>
        <Text style={styles({}).buttonSignUpText}>Entrar com e-mail</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
