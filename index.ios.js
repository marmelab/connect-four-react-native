/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import WelcomePage from './src/WelcomePage';

export default class ConnectFour extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{id: 'WelcomePage', name: 'Index'}}
                renderScene={this.renderScene}
                configureScene={this.configureScene}
            />
        );
    }

    renderScene(route, navigator) {
        var routeId = route.id;
        if (routeId === 'WelcomePage') {
            return (
                <WelcomePage
                    navigator={navigator} />
            );
        }
    }

    configureScene(route){
        if (route.sceneConfig) {
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    }

}

AppRegistry.registerComponent('ConnectFour', () => ConnectFour);
