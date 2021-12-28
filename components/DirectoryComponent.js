import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { DAILYLOG } from '../shared/practicedays';
import { GOALS } from '../shared/goals';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dailylog: DAILYLOG,
            goals: GOALS
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
                    title={item.category}
                    subtitle={item.details}
                    onPress={() => navigate('DailyLogInfo', { goalsId: item.id })}
                    leftAvatar={{ source: require('./images/monday-piano.jpg')}}
                />
            )
        }

        return (
            <Card title="This Week's Goals">
            <FlatList   
                data={this.state.goals}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
            </Card>
        )
    }
}

export default Directory;