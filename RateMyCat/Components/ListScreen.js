/**
 * Created by admin on 08/11/2017.
 */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import NavigationBar from './NavigationBar'
import CatForm from "./CatForm";

export default class ListScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar backText="Back"/>
                <CatForm/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});