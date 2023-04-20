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
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    color:'white',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color:'white',
    textAlign:'center',
    fontWeight: 'normal',
  },
});
