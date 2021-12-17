import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import DailyLogInfo from './DailyLogInfoComponent';
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
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

const AppNavigator = createAppContainer(DirectoryNavigator);

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