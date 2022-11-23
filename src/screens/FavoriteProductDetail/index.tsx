import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

// Styles
import styles from './styles';

// Hooks
import useFavoriteProductDetail from './hooks/useFavoriteProductDetail';

export default function FavoriteProductDetail() {
  const {loading, product, formatter, handleMakeFavorite, mapRef, coords} =
    useFavoriteProductDetail();

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loadingArea}>
          <ActivityIndicator />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      ) : (
        <>
          <View style={styles.detailArea}>
            <View style={styles.detailHeader}>
              <Text style={styles.detailHeaderTitle}>{product?.name}</Text>
              <View style={styles.bagdesArea}>
                <Text style={styles.detailHeaderPrice}>
                  {formatter.format(product ? parseInt(product.price, 10) : 0)}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    handleMakeFavorite(product ? product._id : '0')
                  }>
                  <Text style={styles.detailFavText}>
                    {product?.favorite ? 'Remover dos favoritos' : 'Favoritar'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mapsArea}>
            <MapView
              ref={mapRef}
              style={styles.map}
              zoomControlEnabled
              initialRegion={{
                latitude: -23.6326147,
                longitude: -46.6657763,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              {coords.map((marker, i) => (
                <Marker
                  key={i}
                  identifier={`id${i}`}
                  title={marker.name}
                  pinColor={marker.pinColor}
                  description={marker.address}
                  coordinate={{
                    latitude: parseFloat(marker.latitude),
                    longitude: parseFloat(marker.longitude),
                  }}
                />
              ))}
            </MapView>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
