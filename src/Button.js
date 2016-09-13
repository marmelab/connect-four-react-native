import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
            <Text style={styles.text}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5cb85c',
        borderRadius: 20,
        padding: 10,
    },
    text: {
        fontSize: 22,
        color: 'white',
    }
});
