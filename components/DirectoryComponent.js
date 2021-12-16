import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem   
                title={item.name}
                subtitle={item.techniqueGoal}
                leftAvatar={{ source: require('./images/monday-piano.jpg')}}
            />
        )
    }

    return (
        <FlatList   
            data={props.dailylog}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default Directory;