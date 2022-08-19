import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import Home from '../screens/home';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="CobraShot"/>,
            }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#520004', height: 80}
    }
});

export default HomeStack;