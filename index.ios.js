import React from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import WelcomePage from './src/WelcomePage';

const ConnectFour = () => {
    const configureScene = (route) => {
        if (route.sceneConfig) {
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    };

    const defaultPage = navigator => <WelcomePage navigator={navigator} />;

    const renderScene = (route, navigator) => {
        const routeId = route.id;
        if (routeId === 'WelcomePage') {
            return defaultPage(navigator);
        }
        return defaultPage(navigator);
    };

    return (
        <Navigator
            initialRoute={{ id: 'WelcomePage', name: 'Index' }}
            renderScene={renderScene}
            configureScene={configureScene}
        />
    );
};

AppRegistry.registerComponent('ConnectFour', () => ConnectFour);