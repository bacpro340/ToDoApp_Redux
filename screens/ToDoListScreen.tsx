import {FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import TodoCard, { IToDoCardComponentProps } from '../components/ToDoCard';
import {RootStackParamList} from '../types/RootStackParamList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../src/store';
import { addToDo, deleteToDo } from '../src/addDeleteSlide';

type Props = NativeStackScreenProps<RootStackParamList, 'ToDoList'>;

export const TodoListScreen = ({navigation}: Props) => {
  const listToDo = useSelector((state: RootState) => state.counter.list);
  const dispatch = useDispatch();
  
  const [name, onChangeName] = useState('');
  const [description, onChangeDescription] = useState('');

  const addItem = () => {
    const item = {
      id: Date.now().toString(),
      name: name,
      description: description,
    }
    dispatch(addToDo(item));
  }

  const renderItems = ({item}: any) => {
    const onDeleteItem = (id : string) => {
      dispatch(deleteToDo(id))
      console.log(id);
    }

    const onPressItem = () => {
      navigation.navigate('ToDoDetails', {
        id: item.id,
        name: item.name,
        description: item.description,
      });
    };

    return (
      <View style={styles.item}>
        <View style={styles.left}>
          <TouchableOpacity onPress={onPressItem}>
            <TodoCard
               id={item.id}
               name={item.name}
               description={item.description} />
          </TouchableOpacity>
        </View>
         
        <View style={styles.delete}>
          <TouchableOpacity onPress={() => onDeleteItem(item.id)}>
             <Text style={styles.text}>X</Text>
          </TouchableOpacity>
        </View>
          
      </View>
      
    );
  };

  return (
    <View>
 <View style={styles.container}>
    <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Enter name"
      />
         <TextInput
        style={styles.input}
        onChangeText={onChangeDescription}
        value={description}
        placeholder="Enter description"
      />

      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.text}>ADD TO DO</Text>
      </TouchableOpacity>

      
    </View>
    <View style={styles.list} >
      <FlatList data={listToDo} renderItem={renderItems}></FlatList>

    </View>
    </View>
   
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems:'center',
    justifyContent: 'center'
  },
  list: {
    width:'100%',
    height:'auto',
    paddingHorizontal: 30,
    margin:0,
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#000',

  },
  text: {
    fontSize:16,
    color:'#fff',
    textAlign:'center'
  },
  delete: {

    justifyContent:'center',
    backgroundColor:'red',
    flex: 1,
  }, 
  left: {
    flex:9,

  },
  item: {
    paddingVertical: 8,
    flexDirection: 'row',
  }
});
