import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DAILYLOG } from '../shared/practicedays';

function RenderDailyLog({dailylog}) {
    if(dailylog) {
        return (
            <Card
            featuredTitle={dailylog.name}
            image={require('./images/tuesday-piano.jpg')}>
                <Text style={{margin:10}}>
                    Technique: {dailylog.techniqueGoal}
                  </Text>
                  <Text style={{margin:10, color:'blue'}}>  
                    Listening: {dailylog.listeningGoal}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class DailyLogInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dailylog: DAILYLOG,
        };
    }

    static navigationOptions = {
        title: 'Daily Log Information'
    };

    render() {
        const dailylogId = this.props.navigation.getParam('dailylogId');
        const dailylog = this.state.dailylog.filter(dailylog => dailylog.id === dailylogId)[0];
        return <RenderDailyLog dailylog={dailylog} />;
    }
}

export default DailyLogInfo;