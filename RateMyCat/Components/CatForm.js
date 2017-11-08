/**
 * Created by admin on 08/11/2017.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, TextInput } from 'react-native';


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
                <View style={styles.buttonContainer}>
                    <Button onPress={this._submit} title="Submit" accessibilityLabel="Tap on Me"/>
                </View>

            </View>
        );
    }
    _submit(event) {
        console.log('Pressed!');
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
        borderWidth: 2,
        borderColor: '#621515',
        borderRadius: 4,
        height: 40,
        width: '80%',
        margin: 5,
        padding: 5,
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
    }
});