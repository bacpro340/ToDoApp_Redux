import React from 'react';
import {StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {RootStackParamList} from './types/RootStackParamList';
import {TodoDetailsScreen} from './screens/TodoDetailsScreen';
import {TodoListScreen} from './screens/ToDoListScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();
  // const [textCount, setTextCount] = useState(0);
  console.log('Run');
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="ToDoList">
        <RootStack.Screen name="ToDoList" component={TodoListScreen} />
        <RootStack.Screen name="ToDoDetails" component={TodoDetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
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
});

export default App;
