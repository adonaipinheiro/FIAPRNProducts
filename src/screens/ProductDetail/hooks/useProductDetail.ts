/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useRef, useState} from 'react';
import {
  CommonActions,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {ProductsRouterParamList, RouterStackProp} from '../../../routes';
import Geolocation from '@react-native-community/geolocation';
import useServices, {fullProductDetail} from '../../../services/useServices';
import MapView from 'react-native-maps';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CoordsTypes = {
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  pinColor?: string;
};

export default function useProductDetail() {
  const mapRef = useRef<MapView>(null);
  const navigation = useNavigation<RouterStackProp>();
  const route = useRoute<RouteProp<ProductsRouterParamList, 'ProductDetail'>>();
  const [product, setProduct] = useState<fullProductDetail>();
  const {getProductDetail, loading, makeFavProduct} = useServices();
  const [coords, setCoords] = useState<CoordsTypes[]>([]);

  function fitPadding(coordsParams: CoordsTypes[]) {
    const auxArray: any = [];
    coordsParams.map(coord =>
      auxArray.push({
        latitude: coord.latitude,
        longitude: coord.longitude,
      }),
    );
    mapRef.current?.fitToCoordinates(auxArray, {
      edgePadding: {top: 20, right: 20, bottom: 20, left: 20},
      animated: true,
    });
  }

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const handleGetDetail = () => {
    getProductDetail(route.params.id)
      .then(r => {
        let auxCoords: CoordsTypes[] = [];
        r.stores.map(store => {
          auxCoords.push({
            name: store.name,
            address: store.address,
            latitude: store.latitude,
            longitude: store.longitude,
          });
        });
        Geolocation.getCurrentPosition(pos => {
          auxCoords.push({
            name: 'Você',
            address: 'Sua localização atual',
            latitude: `${pos.coords.latitude}`,
            longitude: `${pos.coords.longitude}`,
            pinColor: '#0000FF',
          });

          setCoords(auxCoords);
          fitPadding(auxCoords);
          setProduct(r);
        });
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

  const handleMakeFavorite = (id: string) => {
    makeFavProduct(id)
      .then(_ => {
        handleGetDetail();
      })
      .catch(_ => {
        Alert.alert('Atenção', 'Não foi possível completar a ação');
      });
  };

  useEffect(() => {
    handleGetDetail();
  }, []);

  return {
    handleMakeFavorite,
    formatter,
    product,
    loading,
    coords,
    mapRef,
  };
}
