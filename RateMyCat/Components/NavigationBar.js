/**
 * Created by admin on 08/11/2017.
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

var {
    Dimensions
} = require('react-native');

export default class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = { pressStatus: false };
    }

    render() {
        return (
            <View style={styles.nav}>
                <View style={styles.backButtonContainer}>
                    <TouchableHighlight onPress={() => this._doSth()}>
                        <Text style={styles.backButtonText}>{this.props.backText}</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Rate my cat</Text>
                </View>
            </View>
        );
    }

    _doSth(event) {
        console.log('Back!');
    }
}


var styles = StyleSheet.create({
    nav: {
        height: 55,
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        backgroundColor: '#621515',
    },
    titleText: {
        fontSize: 18,
        color: '#ffffff',
        alignSelf: 'center',
    },
    titleContainer: {
        marginTop: 10,
        alignSelf: 'center',
        flex:1
    },
    backButtonText: {
        fontSize: 18,
        color: '#ffffff',
        alignSelf: 'center',
    },
    button: {
        borderColor: '#1122FF',
        borderWidth: 1,
        borderRadius: 10,
    },
    buttonPress: {
        borderColor: '#000066',
        backgroundColor: '#005566',
        borderWidth: 5,
        borderRadius: 10,
    },
    backButtonContainer: {
        marginTop: 20,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 50,
        height: 30,
    },
});