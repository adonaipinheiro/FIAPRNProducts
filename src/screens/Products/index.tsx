import React from 'react';
import {
  View,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import {FlatList} from 'react-native';
import PageSelector from '../../components/PageSelector';
import useProducts from './hooks/useProducts';
import ProductItem from './ProductItem';

// Styles
import styles from './styles';

export default function Products() {
  const {
    loading,
    products,
    getAllProducts,
    selectedPage,
    pages,
    handleProductDetail,
  } = useProducts();

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
              onRefresh={() => getAllProducts(selectedPage)}
            />
          }
          renderItem={({item}) => (
            <ProductItem item={item} toDetail={handleProductDetail} />
          )}
          keyExtractor={(item, _) => item._id}
        />
      )}
      <PageSelector
        pages={pages}
        getAllProducts={getAllProducts}
        selectedPage={selectedPage}
      />
    </SafeAreaView>
  );
}
