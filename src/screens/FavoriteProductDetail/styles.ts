import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  loadingArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
  },
  detailArea: {},
  detailHeader: {
    minWidth: '100%',
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#FFF',
  },
  detailHeaderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailHeaderPrice: {
    marginTop: 10,
    padding: 5,
    alignSelf: 'flex-start',
    backgroundColor: '#00FF0020',
    fontWeight: '500',
  },
  detailFavText: {
    marginTop: 10,
    padding: 5,
    alignSelf: 'flex-start',
    backgroundColor: '#ffcc66',
    fontWeight: '500',
  },
  bagdesArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapsArea: {
    flex: 1,
    marginTop: 10,
    height: '100%',
    width: '100%',
    borderRadius: 4,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 4,
  },
});

export default styles;
