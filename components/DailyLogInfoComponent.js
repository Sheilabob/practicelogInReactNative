import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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

function DailyLogInfo(props) {
    return <RenderDailyLog dailylog={props.dailylog} />;
}

export default DailyLogInfo;