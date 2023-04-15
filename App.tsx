import React, {Component, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {decrement, increment, incrementByAmount} from './src/counterSlide';
import {RootState} from './src/store';

const App = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [textCount, setTextCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Counter : {count}</Text>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(decrement());
          }}>
          <Text>-1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(increment());
          }}>
          <Text>+1</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        keyboardType="numeric"
        style={styles.textInput}
        onChangeText={value => {
          setTextCount(parseInt(value));
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(incrementByAmount(textCount));
        }}>
        <Text>Add count</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    padding: 10,
  },
  containerButton: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    padding: 10,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    marginBottom: 10,
  },
});

export default App;
