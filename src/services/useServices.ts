import {useState} from 'react';
import API from './apiConfig';

type SignUpRespType = {
  data: {
    userId: string;
  };
};

export default function useServices() {
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const resp = await API.post('/storeProducts/login', {
        email,
        password,
      });

      if (resp.status === 201) {
        throw Error('Usuário não encontrado');
      }
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

  return {
    loading,
    signIn,
    signUp,
  };
}
