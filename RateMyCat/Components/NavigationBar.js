/**
 * Created by admin on 08/11/2017.
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

var {
    Dimensions
} = require('react-native');

export default class NavigationBar extends Component {
    render() {
        return (
            <View>
                <View style={styles.nav}>
                    <Text style={styles.titleText}>Rate my cat</Text>
                </View>
            </View>
        );
    }
}


var styles = StyleSheet.create({
    nav: {
        height: 55,
        width: Dimensions.get('window').width,
        backgroundColor: '#621515',
    },
    titleText: {
        fontSize: 18,
        color: '#ffffff',
        alignSelf: 'center',
        paddingTop: 25
    }
});