import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, TextInput } from 'react-native';

import CatList from './Components/CatList'
import NavigationBar from './Components/NavigationBar'
import CatForm from './Components/CatForm'

var {
    Dimensions
} = require('react-native');

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar/>
                <View style={styles.formContainer}>
                    <CatForm/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={this._showCats} title="Show cats" color="#621515"/>
                </View>
            </View>
        );
    }

    _showCats(event) {
        console.log('Pressed!');
    }

}

var styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: Dimensions.get('window').width,
        height: 250,
        alignSelf: 'center',
        marginTop: 20,
        borderColor: '#621515',
        borderWidth: 3
    },
    buttonContainer: {
        marginTop: 20,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
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