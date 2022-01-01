import React, { Component } from 'react';
import Home from './HomeComponent';
import ProfilePage from './ProfilePageComponent';
import Directory from './DirectoryComponent';
import DailyLogInfo from './DailyLogInfoComponent';
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { connect } from 'react-redux';
import { fetchGoals } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchGoals
};

// createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

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
        DailyLogInfo: { screen: DailyLogInfo }
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

const ProfilePageNavigator = createStackNavigator(
    {
        ProfilePage: { screen: ProfilePage },
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

const MainNavigator = createBottomTabNavigator(
    {
        Main: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarIcon: () => (
                    <Icon
                        name='music'
                        type='font-awesome'
                        size={24}
                        color='red'
                    />
                )
            }
         },
        'Goal History': {
            screen: DirectoryNavigator,
            navigationOptions: {
                tabBarIcon: () => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color='red'
                    />
                )
            }
        },
        Profile: {
            screen: ProfilePageNavigator,
            navigationOptions: {
                tabBarIcon: () => (
                    <Icon
                        name='user-circle'
                        type='font-awesome'
                        size={24}
                        color='red'
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'green',
            labelStyle: {
              fontSize: 18,
            },
            style: {
              backgroundColor: 'purple',
            },
          }
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    componentDidMount() {
        this.props.fetchGoals();
    }

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

export default connect(null, mapDispatchToProps)(Main);