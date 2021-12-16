import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { DAILYLOG } from '../shared/practicedays';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dailylog: DAILYLOG
        };
    }

    render() {
        return <Directory dailylog = {this.state.dailylog} />
    }
}

export default Main;