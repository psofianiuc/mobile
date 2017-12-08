/**
 * Created by admin on 05/12/2017.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, ListView, AsyncStorage, Button } from 'react-native';


export default class CatList extends Component {

    static navigationOptions = {
        title: 'List'
    };

    constructor(prop) {
        super(prop);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds,
            items: [],
        };


    }

    componentDidMount = async () => {
        try {
            Promise.all(AsyncStorage.getAllKeys()
                .then(ks =>
                    ks.map(k =>
                        AsyncStorage.getItem(k)
                            .then(req => JSON.parse(req))
                            .then(json => {
                                this.state.items.push(json);
                                this.setState({
                                    dataSource: this.state.dataSource.cloneWithRows(this.state.items)
                                });
                            })
                            .catch(error => console.log(error.message))
                    )
                )
            );
        } catch (error) {
            console.log(error.message);
        }
    };

    render() {
        return (
        <View>
            <View style={styles.buttonContainer}>
                <Button onPress={this._deleteAll.bind(this)} title="Delete all" color="#621515"/>
            </View>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(data) => this.renderRow(data)}
            />
        </View>
        );
    }

    renderRow = (data) => {
        console.log(data);
        var str = "";
        for (obj in data) {
            str += " " + data[obj];
        }
        return (
            <View style={styles.rowStyle}>
                <Text style={styles.rowTextStyle}>{str}</Text>
            </View>

        );
     };

    _deleteAll() {
        console.log("Delete all");
        try {
            Promise.all(AsyncStorage.getAllKeys()
                .then(ks => {
                    ks.map(k => {
                            AsyncStorage.removeItem(k);
                            this.setState({items:[]});
                            this.forceUpdate();
                    })
                })
            );
        } catch (error) {
            console.log(error.message);
        }
    }
}

var styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    activityContainer: {
        marginTop: 15,
    },
    listView: {
        backgroundColor: '#ffffff',
    },
    rowStyle: {
        margin: 10,
        borderBottomColor: '#000000',
        paddingBottom: 10,
        borderBottomWidth: 0.5,
    },
    rowTextStyle: {
        color: '#621515',
        fontSize: 14,
    },
    buttonContainer: {
        marginTop: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
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
