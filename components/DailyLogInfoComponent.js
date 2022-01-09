import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { BorderlessButton } from 'react-native-gesture-handler';
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
            featuredTitle={goals.title}
            image={{uri: baseUrl + goals.image}}
            >
                {/* <Text style={styles.title} h1>{goals.title}</Text> */}
                <Text style={{margin:10}}>
                    Details: {goals.details}
                  </Text>
                  <Text style={{margin:10, color:'blue'}}>  
                    Daily Time: {goals.dailyTime} minutes
                </Text>
                <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "row"
    }]}>

                <Text style={{flex: 1, color:'purple'}}>  
                    MON
                </Text>
                <Text style={{flex: 1, color:'purple'}}>  
                    TUE
                </Text>
                <Text style={{flex: 1, color:'purple'}}>  
                    WED
                </Text><Text style={{flex: 1, color:'purple'}}>  
                    THUR
                </Text><Text style={{flex: 1, color:'purple'}}>  
                    FRI
                </Text>
                </View>
                <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "row"
    }]}>

                <Text style={{flex: 1, color:'purple'}}>  
                    {goals.completed.day1}
                </Text>
                <Text style={{flex: 1, color:'purple'}}>  
                    TUE
                </Text>
                <Text style={{flex: 1, color:'purple'}}>  
                    WED
                </Text><Text style={{flex: 1, color:'purple'}}>  
                    THUR
                </Text><Text style={{flex: 1, color:'purple'}}>  
                    FRI
                </Text>
                </View>
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

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
    },
  });

export default connect(mapStateToProps)(DailyLogInfo);