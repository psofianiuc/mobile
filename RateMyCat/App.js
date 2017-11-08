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
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    formContainer: {
        width: Dimensions.get('window').width,
        height: 170,
        alignSelf: 'center',
        marginTop: 20,
        borderColor: '#000000',
        borderWidth: 4
    }
});