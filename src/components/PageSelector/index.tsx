import React from 'react';
import {FlatList} from 'react-native';
import PageSelectorItem from './PageSelectorItem';

// Styles
import styles from './styles';

interface IPageSelector {
  pages: string[];
  getAllProducts(page: number): void;
  selectedPage: number;
}

export default function PageSelector({
  pages,
  getAllProducts,
  selectedPage,
}: IPageSelector) {
  return (
    <FlatList
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      data={pages}
      renderItem={({item}) => (
        <PageSelectorItem
          getAllProducts={getAllProducts}
          value={item}
          selectedPage={selectedPage}
        />
      )}
    />
  );
}
