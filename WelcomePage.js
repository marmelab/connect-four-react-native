import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from './Button'

export default class WelcomePage extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 32,marginBottom:20}}>Welcome</Text>
                <Button onPress={this.startPressed} text='Start'>
                </Button>
            </View>
        );
    }

    startPressed(){
        console.log('test');
    }
}
