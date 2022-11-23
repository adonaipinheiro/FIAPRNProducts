/* eslint-disable react-hooks/exhaustive-deps */
import {CommonActions, useNavigation} from '@react-navigation/native';
import {RouterStackProp} from '../../../routes';
import useServices from '../../../services/useServices';
import * as Yup from 'yup';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export default function useSignIn() {
  const {signIn} = useServices();
  const navigation = useNavigation<RouterStackProp>();
  const insets = useSafeAreaInsets();

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('Campo obrigatório')
      .trim(),
    pass: Yup.string()
      .min(8, 'A senha não atende os requisitos')
      .required('Campo obrigatório')
      .trim(),
  });

  const handleSubmitForm = (
    email: string,
    pass: string,
    setSubmitting: (a: boolean) => void,
  ) => {
    signIn(email, pass)
      .then(_ => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Dashboard'}],
          }),
        );
      })
      .catch(_ => {
        setSubmitting(false);
      });
  };

  const handleToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      Alert.alert('Opa!', 'Parece que você já está logado');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Dashboard'}],
        }),
      );
    }
  };

  useEffect(() => {
    handleToken();
  }, []);

  return {
    LoginSchema,
    handleSubmitForm,
    handleSignUp,
    insets,
  };
}
