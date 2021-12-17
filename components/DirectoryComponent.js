import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DAILYLOG } from '../shared/practicedays';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dailylog: DAILYLOG,
        };
    }

    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem   
                    title={item.name}
                    subtitle={item.techniqueGoal}
                    onPress={() => navigate('DailyLogInfo', { dailylogId: item.id })}
                    leftAvatar={{ source: require('./images/monday-piano.jpg')}}
                />
            )
        }

        return (
            <FlatList   
                data={this.state.dailylog}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}

export default Directory;