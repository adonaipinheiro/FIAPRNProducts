import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {RouterStackProp} from '../../../routes';
import useServices from '../../../services/useServices';
import {CommonActions} from '@react-navigation/native';

export default function useSignUp() {
  const {signUp, loading} = useServices();
  const navigation = useNavigation<RouterStackProp>();

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleGoBack = () => {
    navigation.pop();
  };

  const handleSignUp = () => {
    signUp(name, phone, email, password)
      .then(_ => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Dashboard'}],
          }),
        );
      })
      .catch(e => {
        console.log(e);
      });
  };

  return {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
    handleGoBack,
    loading,
    handleSignUp,
  };
}
