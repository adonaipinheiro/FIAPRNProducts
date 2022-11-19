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
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Styles
import styles from './styles';

// Images
import {Logo} from '../../assets';

export default function SignUp() {
  const {
    handleGoBack,
    handleSignIn,
    name,
    setName,
    handleSignUp,
    phone,
    setPhone,
    email,
    setEmail,
    password,
    setPassword,
    loading,
  } = useSignUp();
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Text style={styles.goBackButtonText}>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.logoArea}>
        <Image style={styles.logoImg} source={Logo} />
      </View>
      <View style={styles.textInputArea}>
        <TextInput value={name} onChangeText={setName} placeholder="Nome" />
        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder="Telefone"
          keyboardType="phone-pad"
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry
        />
        <TextInput placeholder="Digite novamente sua senha" secureTextEntry />
      </View>
      <View style={styles.buttonsArea}>
        <TouchableOpacity
          disabled={loading}
          onPress={handleSignUp}
          style={[styles.buttonSignIn, {opacity: loading ? 0.1 : 1}]}>
          <Text style={styles.buttonSignInText}>
            {loading ? 'Carregando...' : 'Cadastrar'}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleSignIn}
        style={[styles.buttonSignUp, {bottom: insets.bottom}]}>
        <Text style={styles.buttonSignUpText}>Entrar com e-mail</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
