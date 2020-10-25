import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class BookRequestScreen extends Component{
    constructor(){
        super()
        this.state = {
            userId: firebase.auth().currentUser.email,
            bookName: '',
            reasonToRequest: ''
        }
    }
    render(){
        return(
            <View>
                <MyHeader 
                title = "Request Book"/>
                <KeyboardAvoidingView>
                    <TextInput
                    style = {styles.formTextInput}
                    placeholder = {"Enter Book Name"}
                    onChangeText = {(text) => {
                        this.setState({
                            bookName: text
                        })
                    }} value = {this.state.bookName}/>

                    <TextInput
                    style = {[styles.formTextInput, {height: 300}]}
                    placeholder = {"Why Do You Need The Book?"}
                    multiline
                    numberOfLines = {8}
                    onChangeText = {(text) => {
                        this.setState({
                            reasonToRequest: text
                        })
                    }} value = {this.state.reasonToRequest}/>
                    <TouchableOpacity
                    style = {styles.button}
                    onPress = {() => {
                        this.addRequest(this.state.bookName, this.state.reasonToRequest)
                    }}>
                        <Text>Request</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({ keyBoardStyle : { flex:1, alignItems:'center', justifyContent:'center' }, formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, }, button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, } )