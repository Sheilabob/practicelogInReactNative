import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile, Card } from 'react-native-elements';
// import { GOALS } from '../shared/goals';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        goals: state.goals
    };
};



class Directory extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         goals: GOALS
    //     };
    // }

    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <Tile  
                    title={item.category}
                    caption={item.details}
                    featured
                    onPress={() => navigate('DailyLogInfo', { goalsId: item.id })}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            )
        }

        return (
            <Card title="This Week's Goals">
            <FlatList   
                data={this.props.goals.goals}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
            </Card>
        )
    }
}

export default connect(mapStateToProps)(Directory);