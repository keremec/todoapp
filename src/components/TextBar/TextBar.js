import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './TextBar.style';

const TextBar = props => {
  const [isEmpty, setIsEmpty] = useState(true);

  const [inputValue, setInputValue] = useState('');

  const inputValueChange = text => {
    text === '' ? setIsEmpty(true) : setIsEmpty(false);
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak..."
        placeholderTextColor={'#7a7f81'}
        onChangeText={inputValueChange}
        value={inputValue}
      />
      {isEmpty ? (
        <TouchableOpacity style={styles.button_null} disabled={true}>
          <Text style={styles.button_text}>Kaydet</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.onSave(inputValue)}>
          <Text style={styles.button_text}>Kaydet</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextBar;
