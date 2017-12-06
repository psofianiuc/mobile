/**
 * Created by admin on 05/12/2017.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, ListView, Button, ActivityIndicator, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Welcome'
    };

    constructor(props) {
        super(props);

    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Button
                    onPress={() => navigate('Add')}
                    title="Add cat"
                />
                <Button
                    onPress={() => navigate('List')}
                    title="List"
                />
            </View>
        );
    }
}


export var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});