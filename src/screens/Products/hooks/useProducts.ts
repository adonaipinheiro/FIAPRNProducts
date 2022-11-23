/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {ProductsRouterProp} from '../../../routes';
import useServices, {IProduct} from '../../../services/useServices';

export default function useProducts() {
  const navigation = useNavigation<ProductsRouterProp>();
  const {getProducts, loading} = useServices();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [pages, setPages] = useState<string[]>(['1']);
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const getAllProducts = async (page = 1) => {
    setSelectedPage(page);
    getProducts(page)
      .then(r => {
        let pagesArray = [];
        for (
          let index = 0;
          index < Math.ceil(r.totalItems / r.perPage);
          index++
        ) {
          pagesArray.push(`${index + 1}`);
        }
        setPages(pagesArray);
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
    navigation.navigate('ProductDetail', {
      id,
    });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return {
    loading,
    products,
    pages,
    selectedPage,
    getAllProducts,
    handleProductDetail,
  };
}
