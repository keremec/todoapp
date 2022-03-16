import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './Card.style';

const Card = props => {
  return (
    <View>
      {!props.notes.isDone ? (
        <TouchableHighlight
          style={styles.not_done_in_container}
          onPress={() => props.onChange(props.notes.id)}
          onLongPress={() => props.onDelete(props.notes.id)}>
          <Text style={styles.not_done_text}>{props.notes.title}</Text>
        </TouchableHighlight>
      ) : (
        <TouchableHighlight
          style={styles.done_in_container}
          onPress={() => props.onChange(props.notes.id)}
          onLongPress={() => props.onDelete(props.notes.id)}>
          <Text style={styles.done_text}>{props.notes.title}</Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default Card;
