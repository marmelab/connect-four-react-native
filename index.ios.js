import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import WelcomePage from './src/WelcomePage';

export default class ConnectFour extends Component {
    static configureScene(route) {
        if (route.sceneConfig) {
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    }

    static defaultPage(navigator) {
        return (
            <WelcomePage navigator={navigator} />
        );
    }

    renderScene(route, navigator) {
        const routeId = route.id;
        if (routeId === 'WelcomePage') {
            return this.defaultPage(navigator);
        }
        return this.defaultPage(navigator);
    }

    render() {
        return (
            <Navigator
                initialRoute={{ id: 'WelcomePage', name: 'Index' }}
                renderScene={this.renderScene}
                configureScene={this.configureScene}
            />
        );
    }

}

AppRegistry.registerComponent('ConnectFour', () => ConnectFour);
