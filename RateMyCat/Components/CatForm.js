/**
 * Created by admin on 08/11/2017.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, ListView, Button, ActivityIndicator, TextInput } from 'react-native';


export default class CatForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Cat name"
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Cat age"
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Cat color"
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textInputStyle: {
        backgroundColor: '#ffffff',
        borderWidth: 3,
        borderColor: '#621515',
        borderRadius: 4,
        height: 40,
        width: '80%',
        margin: 5,
    }
});