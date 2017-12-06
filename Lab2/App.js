import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, AppRegistry } from 'react-native';
import { Navigator} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen'
import AddItem from './Screens/AddItem'
import ItemList from './Screens/ItemList'

export const Lab2 = StackNavigator({
    Home: { screen: HomeScreen},
    Add: { screen: AddItem},
    List: { screen: ItemList},
});


export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <Lab2/>;
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 45,
        borderColor: '#621515',
        borderWidth: 2,
        borderRadius: 4,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
    },
});
