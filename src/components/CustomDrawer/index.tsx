import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, View, TouchableOpacity} from 'react-native';
import {Avatar} from '@react-native-material/core';

// Styles
import styles from './styles';

// Hooks
import useCustomDrawer from './hooks/useCustomDrawer';

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const {userName, insets, handleSignOut} = useCustomDrawer(props);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles({}).container}>
      <View style={styles({}).userContainer}>
        <Avatar label={userName} autoColor />
        <Text style={styles({}).userText}>Olá, {userName}!</Text>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity
        onPress={handleSignOut}
        activeOpacity={0.7}
        style={styles({insets}).signOutButton}>
        <Text style={styles({}).signOutButtonText}>Sair</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}
