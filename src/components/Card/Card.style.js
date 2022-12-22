import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 3,
  },
  cardText: {
    fontSize: 18,
    margin: 10,
    marginTop: 3,
  },
  cardButtonContainer: {
    backgroundColor: 'purple',
    padding: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardButtonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
