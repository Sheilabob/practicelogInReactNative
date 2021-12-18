import React, { Component } from 'react';
import Home from './HomeComponent';
import PracticeHistory from './PracticeHistoryComponent';
import Directory from './DirectoryComponent';
import DailyLogInfo from './DailyLogInfoComponent';
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';


const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        DailyLogInfo: { screen: DailyLogInfo }
    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD',
            },
            headerTintColor: '#fff',
            headerTintStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD',
            },
            headerTintColor: '#fff',
            headerTintStyle: {
                color: '#fff'
            }
        }
    }
);

const PracticeHistoryNavigator = createStackNavigator(
    {
        PracticeHistory: { screen: PracticeHistory },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD',
            },
            headerTintColor: '#fff',
            headerTintStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {screen: HomeNavigator },
        Directory: {screen: DirectoryNavigator },
        'Practice History': {screen: PracticeHistoryNavigator}
    },
    {
        drawerBackgroundColor: '#CEC8FF',
        drawerPosition: 'right'
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    render() {
        return (
            <View 
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                }}
            >
                <AppNavigator />
            </View>
        );
    }
}

export default Main;