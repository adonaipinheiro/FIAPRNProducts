import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RouterStackProp} from '../../routes';
// import useServices from '../../services/useServices';
import TextInput from '../../components/TextInput';

// Styles
import styles from './styles';

// Images
import {Logo} from '../../assets';

export default function SignIn() {
  const navigation = useNavigation<RouterStackProp>();
  const insets = useSafeAreaInsets();
  // const {signIn, loading} = useServices();

  // const handleSignUp = () => {
  //   // navigation.navigate('SignUp');
  //   signIn('a3@a.com.br', 'Aj081209')
  //     .then(r => {
  //       console.log(r);
  //     })
  //     .catch(e => {
  //       console.log(e.message);
  //     });
  // };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.logoArea}>
        <Image style={styles.logoImg} source={Logo} />
      </View>
      <View style={styles.textInputArea}>
        <TextInput placeholder="E-mail" keyboardType="email-address" />
        <TextInput placeholder="Senha" secureTextEntry />
      </View>
      <View style={styles.buttonsArea}>
        <TouchableOpacity style={styles.buttonSignIn}>
          <Text style={styles.buttonSignInText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleSignUp}
        style={[styles.buttonSignUp, {bottom: insets.bottom}]}>
        <Text style={styles.buttonSignUpText}>Cadastrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
