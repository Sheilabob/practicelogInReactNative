import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import DailyLogInfo from './DailyLogInfoComponent';
import { View } from 'react-native';
import { DAILYLOG } from '../shared/practicedays';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dailylog: DAILYLOG,
            selectedDailyLog: null,
        };
    }

    onDailyLogSelect(dailylogId) {
        this.setState({selectedDailyLog: dailylogId})
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Directory 
                    dailylog = {this.state.dailylog}
                    onPress={dailylogId => this.onDailyLogSelect(dailylogId)} 
                />
                <DailyLogInfo 
                    dailylog={this.state.dailylog.filter(dailylog => dailylog.id ===this.state.selectedDailyLog)[0]}
                />

            </View>
        )
    }
}

export default Main;