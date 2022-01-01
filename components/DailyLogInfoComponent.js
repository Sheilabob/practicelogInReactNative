import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
// import { DAILYLOG } from '../shared/practicedays';
// import { GOALS } from '../shared/goals';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        goals: state.goals
    };
};



function RenderDailyLog({goals}) {
    if(goals) {
        return (
            <Card
            featuredTitle={goals.category}
            image={{uri: baseUrl + goals.image}}>
                <Text style={{margin:10}}>
                    Details: {goals.details}
                  </Text>
                  <Text style={{margin:10, color:'blue'}}>  
                    Daily Time: {goals.dailyTime} minutes
                </Text>
            </Card>
        );
    }
    return <View />;
}

class DailyLogInfo extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         dailylog: DAILYLOG,
    //         goals: GOALS
    //     };
    // }

    static navigationOptions = {
        title: 'Daily Log Information'
    };

    render() {
        const goalsId = this.props.navigation.getParam('goalsId');
        const goals = this.props.goals.goals.filter(goals => goals.id === goalsId)[0];
        return <RenderDailyLog goals={goals} />;
    }
}

export default connect(mapStateToProps)(DailyLogInfo);