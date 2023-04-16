import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import TodoCard from '../components/ToDoCard';
import {RootStackParamList} from '../types/RootStackParamList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const DATA = [
  {
    id: 1,
    name: 'name',
    description: 'des',
  },
  {
    id: 2,
    name: 'name2',
    description: 'des2',
  },
  {
    id: 3,
    name: 'name3',
    description: 'des3',
  },
  {
    id: 4,
    name: 'name4',
    description: 'des4',
  },
];

type Props = NativeStackScreenProps<RootStackParamList, 'ToDoList'>;

export const TodoListScreen = ({navigation}: Props) => {
  const renderItems = ({item}: any) => {
    const onPressItem = () => {
      navigation.navigate('ToDoDetails', {
        id: item.id,
        name: item.name,
        description: item.description,
      });
    };

    return (
      <Pressable onPress={onPressItem}>
        <TodoCard
          id={item.id}
          name={item.name}
          description={item.description}
        />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={renderItems}></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
