/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import {RouterStackProp} from '../../../routes';
import useServices from '../../../services/useServices';
import {CommonActions} from '@react-navigation/native';
import * as Yup from 'yup';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {useEffect} from 'react';

export default function useSignUp() {
  const {signUp, loading} = useServices();
  const navigation = useNavigation<RouterStackProp>();

  const insets = useSafeAreaInsets();

  const phoneRegex = /^(\d{2})\D*(\d{5}|\d{4})\D*(\d{4})$/;

  const SignUpSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório').trim(),
    tel: Yup.string()
      .required('Campo obrigatório')
      .min(11, 'Número de telefone inválido')
      .max(11, 'Número de telefone inválido')
      .matches(phoneRegex, 'Número de telefone inválido')
      .trim(),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('Campo obrigatório')
      .trim(),
    pass: Yup.string()
      .min(8, 'A senha não atende os requisitos')
      .required('Campo obrigatório')
      .trim(),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('pass'), null], 'As senhas não estão iguais')
      .required('Campo obrigatório')
      .trim(),
  });

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleGoBack = () => {
    navigation.pop();
  };

  const handleSubmitForm = (
    name: string,
    phone: string,
    email: string,
    password: string,
    setSubmitting: (a: boolean) => void,
  ) => {
    signUp(name, phone, email, password)
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
    handleSubmitForm,
    handleSignIn,
    handleGoBack,
    loading,
    insets,
    SignUpSchema,
  };
}
