import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RouterStackProp} from '../../routes';

export default function SignIn() {
  const navigation = useNavigation<RouterStackProp>();

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleDash = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView>
      <Text>SignIn</Text>
      <TouchableOpacity onPress={handleSignUp}>
        <Text>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDash}>
        <Text>Dashboard</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
