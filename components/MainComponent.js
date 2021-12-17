import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import DailyLogInfo from './DailyLogInfoComponent';
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';


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

const MainNavigator = createDrawerNavigator(
    {
        Home: {screen: HomeNavigator },
        Directory: {screen: DirectoryNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         dailylog: DAILYLOG,
    //         selectedDailyLog: null,
    //     };
    // }

    // onDailyLogSelect(dailylogId) {
    //     this.setState({selectedDailyLog: dailylogId})
    // }

    render() {
        return (
            <View 
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                }}
            >
                {/* <Directory 
                    dailylog = {this.state.dailylog}
                    onPress={dailylogId => this.onDailyLogSelect(dailylogId)} 
                />
                <DailyLogInfo 
                    dailylog={this.state.dailylog.filter(dailylog => dailylog.id ===this.state.selectedDailyLog)[0]}
                /> */}
                <AppNavigator />
            </View>
        );
    }
}

export default Main;