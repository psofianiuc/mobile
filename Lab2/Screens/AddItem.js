/**
 * Created by admin on 05/12/2017.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, TextInput, AsyncStorage } from 'react-native';
import CustomDatePicker from '../Components/CustomDatePicker'

export default class CatForm extends Component {

    static navigationOptions = {
        title: 'Add cat'
    };

    _submit() {
        console.log("Button pressed")
        var RandomNumber = Math.floor(Math.random() * 10000) + 1 ;
        if (this.state.catname != "" && this.state.catcolour != "" && this.state.catage != "") {
            this.setState({currentNr: RandomNumber})
            console.log(this.state.catname);
            console.log(this.state.catage);
            console.log(this.state.catcolour);
            console.log(this.state.currentNr);
        }

    }

    constructor(props){
        super(props);
        this.state = {
            catname : "",
            catage :"",
            catcolour : "",
            date : {date:"2001-01-01"},
            currentNr : Math.floor(Math.random() * 10000) + 1,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Cat name"
                        onChangeText={(text) => this.setState({catname: text})}
                    />
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Cat age"
                        onChangeText={(text) => this.setState({catage: text})}
                    />
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Cat color"
                        onChangeText={(text) => this.setState({catcolour: text})}
                    />
                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 17, color: '#621515'}}>Birth day:</Text>
                        <Text/>
                        <CustomDatePicker ref="DatePicker" style={{width:'100%'}}/>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={this._submit.bind(this)} title="Submit" color="#621515"/>
                </View>
            </View>
        );

    }

}



var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    formContainer: {
        marginTop: '10%',
        marginBottom: '5%',
        width: '100%',
        alignItems: 'center'
    },
    textInputStyle: {
        backgroundColor: '#ffffff',
        height: 40,
        width: '80%',
        margin: 5,
        padding: 5,

        borderWidth: 2,
        borderColor: '#621515',
        borderRadius: 4,
    },
    textContainer: {
        marginTop: 10,
        marginBottom: 10,
        width: '80%',
        padding: 10,
        backgroundColor: '#ffffff',

        borderWidth: 2,
        borderColor: '#621515',
        borderRadius: 4,
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
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
    },
});