import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  not_done_in_container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#7da453',
    borderRadius: 5,
    margin: 5,
  },
  done_in_container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#36474f',
    borderRadius: 5,
    margin: 5,
  },
  not_done_text: {color: 'white'},
  done_text: {color: '#798082', textDecorationLine: 'line-through'},
});
