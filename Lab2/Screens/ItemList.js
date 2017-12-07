/**
 * Created by admin on 05/12/2017.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, ListView, AsyncStorage } from 'react-native';


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
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(data) => this.renderRow(data)}
            />
        );
    }

    renderRow = (data) => {
        console.log(data);
        return (
            <View style={styles.rowStyle}>
                <Text style={styles.rowTextStyle}>{data[0]} - {data[1]}</Text>
            </View>
        );
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
    }
});
