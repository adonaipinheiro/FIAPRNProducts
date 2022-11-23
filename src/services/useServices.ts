import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import API from './apiConfig';

type SignUpRespType = {
  data: {
    userId: string;
  };
};

type SignInRespType = {
  data: {
    token: string;
    name: string;
  };
  status: number;
};

export type IProduct = {
  _id: string;
  name: string;
  price: number;
  favorite: boolean;
};

type GetProductsRespType = {
  data: {
    products: IProduct[];
    totalItems: number;
    page: string;
    perPage: number;
  };
};

export type fullProductDetail = {
  _id: string;
  name: string;
  price: string;
  favorite: boolean;
  stores: [
    {
      _id: string;
      name: string;
      address: string;
      latitude: string;
      longitude: string;
    },
  ];
  createdDate: string;
  updatedDate: string;
};

type GetProductDetailRespType = {
  data: {
    product: fullProductDetail;
  };
};

export default function useServices() {
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const resp: SignInRespType = await API.post('/storeProducts/login', {
        email,
        password,
      });

      if (resp.status === 201) {
        throw Error('Usuário não encontrado');
      }

      await AsyncStorage.multiSet([
        ['token', resp.data.token],
        ['userName', resp.data.name],
      ]);

      return resp.data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (
    name: string,
    phone: string,
    email: string,
    password: string,
  ) => {
    try {
      setLoading(true);
      const resp: SignUpRespType = await API.put('/storeProducts/signup', {
        name,
        phone,
        email,
        password,
      });

      return resp.data.userId;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getProducts = async (page?: number) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');

      if (!token) {
        throw Error('Token inválido');
      }

      const resp: GetProductsRespType = await API.get('/storeProducts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page,
          perPage: 10,
        },
      });

      return resp.data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getProductDetail = async (id: string) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');

      if (!token) {
        throw Error('Token inválido');
      }

      const resp: GetProductDetailRespType = await API.get(
        `/storeProducts/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return resp.data.product;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const makeFavProduct = async (id: string) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');

      if (!token) {
        throw Error('Token inválido');
      }

      const resp = await API.post(
        '/storeProducts/ManageFavorite',
        {
          productID: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (resp.status === 201 || resp.status === 202) {
        throw Error('Usuário ou produto não encontrados');
      }

      return resp.data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getFavoritesProducts = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');

      if (!token) {
        throw Error('Token inválido');
      }

      const resp: GetProductsRespType = await API.get(
        '/storeProducts/getFavProducts',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return resp.data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    signIn,
    signUp,
    getProducts,
    getProductDetail,
    makeFavProduct,
    getFavoritesProducts,
  };
}
