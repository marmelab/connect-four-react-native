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

import WelcomePage from './WelcomePage';

class ConnectFour extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{id: 'WelcomePage', name: 'Index'}}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route) => {
                if (route.sceneConfig) {
                    return route.sceneConfig;
                }
                return Navigator.SceneConfigs.FloatFromRight;
            }} />
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

}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('ConnectFour', () => ConnectFour);
