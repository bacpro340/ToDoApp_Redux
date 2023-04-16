import {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

export interface IToDoCardComponentProps {
  id: string;
  name: string;
  description?: string;
}

export default class TodoCard extends Component<IToDoCardComponentProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.name}</Text>
        <Text style={styles.text}>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#095',
    padding: 4,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});
