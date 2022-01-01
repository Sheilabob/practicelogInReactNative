import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem, Card, Rating } from 'react-native-elements';
// import { GOALS } from '../shared/goals';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        goals: state.goals
    };
};

class Home extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         goals: GOALS
    //     };
    // }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderMainPageItem = ({item}) => {
            return (
                <ListItem   
                    title={
                        <View>
                        <Text>{item.category}</Text>
                        <Rating
                            readonly
                            imageSize={30}
                            startingValue={item.weeklyAmountCompleted}
                            style={{alignItems: 'center', padding: 10}}
                            ratingCount={5}
                            type='bell'
                        />
                        </View>}
                    onPress={() => navigate('DailyLogInfo', { goalsId: item.id })}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            )
        }

        return (
            <View>
                <Text>This week's progress tracker</Text>
                <Text>List of this week's goals with each having a progress tracker</Text>
                <Card title="This Week's Progress">
                    <FlatList   
                        data={this.props.goals.goals}
                        renderItem={renderMainPageItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>

                <Text>Put a streak tracker in the top bar?</Text>
            </View>
        );
    }
}

export default connect(mapStateToProps)(Home);