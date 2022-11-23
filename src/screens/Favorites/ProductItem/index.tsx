import {Avatar} from '@react-native-material/core';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import type {IProduct} from '../../../services/useServices';

// Styles
import styles from './styles';

interface IProductItem {
  item: IProduct;
  toDetail(id: string): void;
}

export default function ProductItem({item, toDetail}: IProductItem) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <TouchableOpacity
      onPress={() => {
        toDetail(item._id);
      }}
      activeOpacity={0.7}
      style={styles.container}>
      <View style={styles.detailArea}>
        <Text style={styles.detailTitle}>{item.name}</Text>
        <Text style={styles.detailPrice}>{formatter.format(item.price)}</Text>
      </View>
      <View style={styles.favArea}>
        <Avatar label={'F'} color={'#ffcc66'} size={40} />
      </View>
    </TouchableOpacity>
  );
}
