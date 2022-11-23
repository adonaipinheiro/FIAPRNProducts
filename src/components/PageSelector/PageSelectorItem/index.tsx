import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

// Styles
import styles from './styles';

interface IPageSelectorItem {
  value: string;
  getAllProducts(page: number): void;
  selectedPage: number;
}

export default function PageSelectorItem({
  value,
  getAllProducts,
  selectedPage,
}: IPageSelectorItem) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={
        styles({isSelected: selectedPage === parseInt(value, 10)}).container
      }
      onPress={() => getAllProducts(parseInt(value, 10))}>
      <Text style={styles({}).text}>{value}</Text>
    </TouchableOpacity>
  );
}
