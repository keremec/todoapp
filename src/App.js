import React, {useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TextBar from './components/TextBar';
import {Card} from './components/Card';
import NoteModel from './Model/NoteModel';

function App() {
  //Constants
  let [counter, setCounter] = useState(0);
  const [notes, setNotes] = useState([]);
  //Functions
  function addNote(input) {
    const newNote = new NoteModel(Date.now(), input.toString(), false);
    setNotes(prevState => [...prevState, newNote]);
    setCounter(counter + 1);
  }
  function deleteNote(id) {
    let indexNum = notes.findIndex(obj => obj.id === id);
    let isNotDone = !notes[indexNum].isDone;
    notes.splice(indexNum, 1);
    isNotDone ? setCounter(counter - 1) : setNotes(notes.slice(0));
  }
  function changeNote(id) {
    let indexNum = notes.findIndex(obj => obj.id === id);
    notes[indexNum].isDone = !notes[indexNum].isDone;
    notes[indexNum].isDone ? setCounter(counter - 1) : setCounter(counter + 1);
  }
  //render function
  const renderNotes = ({item}) => (
    <Card notes={item} onChange={changeNote} onDelete={deleteNote} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
        <View style={styles.in_container}>
          <Text style={styles.title}>Yapılacaklar</Text>
          <Text style={styles.counter}>{counter}</Text>
        </View>
        <FlatList
          style={styles.notes}
          data={notes}
          renderItem={renderNotes}
          keyExtractor={item => item.id}
        />
        <TextBar onSave={addNote} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f2027',
    flex: 1,
  },
  in_container: {padding: 10, flexDirection: 'row'},
  title: {fontWeight: 'bold', fontSize: 35, flex: 1, color: '#fea500'},
  counter: {fontSize: 35, marginRight: 5, color: '#fea500'},
  notes: {flex: 1},
});
