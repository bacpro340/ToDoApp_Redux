import {StyleSheet, Text, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'ToDoDetails', 'pro'>;

export const TodoDetailsScreen = ({navigation, route}: Props) => {
  const {id, name, description}: any = route.params;
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
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
