import React from 'react';
import {
  View,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import {FlatList} from 'react-native';
import useFavorites from './hooks/useFavorites';
import ProductItem from './ProductItem';

// Styles
import styles from './styles';

export default function Favorites() {
  const {loading, products, getAllFavoritesProducts, handleProductDetail} =
    useFavorites();

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loadingArea}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={products}
          contentContainerStyle={styles.productsContainer}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => getAllFavoritesProducts()}
            />
          }
          renderItem={({item}) => (
            <ProductItem item={item} toDetail={handleProductDetail} />
          )}
          keyExtractor={(item, _) => item._id}
        />
      )}
    </SafeAreaView>
  );
}
