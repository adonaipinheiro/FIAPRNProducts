/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {FavoriteProductsRouterProp} from '../../../routes';
import useServices, {IProduct} from '../../../services/useServices';

export default function useProducts() {
  const navigation = useNavigation<FavoriteProductsRouterProp>();
  const {loading, getFavoritesProducts} = useServices();
  const [products, setProducts] = useState<IProduct[]>([]);

  const getAllFavoritesProducts = async () => {
    getFavoritesProducts()
      .then(r => {
        setProducts(r.products);
      })
      .catch(_ => {
        Alert.alert(
          'Atenção',
          'Não foi possível completar a requisição, por favor tente fazer o login novamente',
        );
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'SignIn'}],
          }),
        );
        AsyncStorage.clear();
      });
  };

  const handleProductDetail = (id: string) => {
    navigation.navigate('FavoriteProductDetail', {
      id,
    });
  };

  useEffect(() => {
    getAllFavoritesProducts();
  }, []);

  return {
    loading,
    products,
    getAllFavoritesProducts,
    handleProductDetail,
  };
}
