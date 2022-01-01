import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ProfilePage extends Component {

    static navigationOptions = {
        title: 'Practice History'
    }

    render() {
        return (
            <View>
                <Text>Change this to personal info, like profile stuff, and set up an option to send log to teacher.</Text>
            </View>
        );
    }
}

export default ProfilePage;