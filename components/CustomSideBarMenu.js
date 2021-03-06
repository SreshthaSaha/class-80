import firebase from 'firebase'
import React, { Component } from 'react';
import {View,Text,TextInput,KeyboardAvoidingView,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import {DrawerItems} from 'react-navigation'


    export default class CustomSideBarMenu extends Component{
        render(){
            return(
                <View style = {styles.container}>
                    <View style = {styles.drawerItemsContainer}>
                        <DrawerItems {...this.props}></DrawerItems>
                    </View>
                    <View>
                        <TouchableOpacity onPress = {()=>{
                            this.props.navigation.navigate('WelcomeScreen')
                            firebase.auth().signOut()
                        }}>
                            <Text>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }
    var styles = StyleSheet.create({ container : { flex:1 }, 
        drawerItemsContainer:{ flex:0.8 }, 
        logOutContainer : { flex:0.2, justifyContent:'flex-end', paddingBottom:30 }, 
        logOutButton : { height:30, width:'100%', justifyContent:'center', padding:10 }, 
        logOutText:{ fontSize: 30, fontWeight:'bold' } })

