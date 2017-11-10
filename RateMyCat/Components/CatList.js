/**
 * Created by admin on 08/11/2017.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, ListView, Button, ActivityIndicator, TextInput } from 'react-native';


export default class CatList extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: 0,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    showRetry() {
        this.setState({
            loaded: 2,
        });
    }

    fetchData() {
        this.sleep(5000).then(() => {
            setTimeout(() => {
                fetch("https://jsonplaceholder.typicode.com/todos")
                    .then((response) => {
                        if (response.status === 200) {
                            try {
                                return response.json();
                            } catch (e) {
                                console.log("Unable to parse response: " + response, e);
                                this.showRetry();
                                return null;
                            }
                        }
                        console.log("response: " + JSON.stringify(response));
                        this.showRetry();
                        return null;
                    })
                    .then((responseData) => {
                        if (responseData !== null) {
                            this.setState({
                                dataSource: this.state.dataSource.cloneWithRows(responseData),
                                loaded: 1,
                            });
                        } else {
                            this.showRetry();
                        }
                    })
                    .catch((err) => {
                        console.error(err);
                        this.showRetry();
                    })
                    .done();
            }, 500);
        });
    }

    renderStuff(todo) {
        return (<View style={styles.rowStyle}>
            <Text style={styles.rowTextStyle}>{todo.id} - {todo.title}</Text>
        </View>);
    }

    render() {
        if (this.state.loaded === 0) {
            return (
                <View style={styles.container}>
                    <Text> Please wait!! </Text>
                    <View style={styles.activityContainer}>
                        <ActivityIndicator/>
                    </View>
                </View>);
        } else if (this.state.loaded === 2) {
            return (
                <View>
                    <Text> The content is not available </Text>
                    <Button title="Retry" onPress={() => {
                        this.setState({loaded: 0});
                        this.fetchData();
                    }}/>
                </View>);
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderStuff}
                style={styles.listView}
            />
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
