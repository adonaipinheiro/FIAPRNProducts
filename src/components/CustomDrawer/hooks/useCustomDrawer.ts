import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CommonActions} from '@react-navigation/native';

export default function useCustomDrawer(props: DrawerContentComponentProps) {
  const insets = useSafeAreaInsets();
  const [userName, setUser] = useState<string>('');

  const handleSignOut = async () => {
    await AsyncStorage.clear();
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      }),
    );
  };

  const getUserName = async () => {
    try {
      const user = await AsyncStorage.getItem('userName');
      if (!user) {
        throw Error;
      }
      setUser(user);
    } catch (_) {
      setUser('Usuário');
    }
  };

  useEffect(() => {
    getUserName();
  }, []);

  return {
    userName,
    handleSignOut,
    insets,
  };
}
