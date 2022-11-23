import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    marginBottom: 10,
  },
  detailArea: {
    width: '80%',
  },
  detailTitle: {
    fontWeight: 'bold',
  },
  detailPrice: {
    marginTop: 10,
    padding: 5,
    alignSelf: 'flex-start',
    backgroundColor: '#00FF0020',
    fontWeight: '500',
  },
  favArea: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
