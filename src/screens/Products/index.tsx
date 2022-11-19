import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {ProductsRouterProp} from '../../routes';

export default function Products() {
  const navigation = useNavigation<ProductsRouterProp>();

  const handleNavigation = () => {
    navigation.navigate('ProductDetail');
  };

  return (
    <SafeAreaView>
      <Text>Products</Text>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>Detail</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
