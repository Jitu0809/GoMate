import { Button, Dimensions, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Login from '../components/Login';
import SignUp from '../components/SignUp';

// const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function LoginScreen() {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <View style={{ height: screenHeight*0.3, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={styles.logoContainer}>
            <Image
                source={require('../../assets/logo.png')} 
                style={styles.logo}
            />
            <Text style={styles.logoName}>GoMate</Text>
          </View>
          <Text style={styles.welcomeMsg}>Welcome to Go Mate!</Text>
          <Text style={{ color: 'rgb(150,150,150)', textAlign: 'center', paddingLeft: 40, paddingRight: 40 }}>SignUp or login below to find you travel buddies that matches your vibe.</Text>
          <View style={styles.btnContainer}>
            <TouchableHighlight
              onPress={() => {}} 
              underlayColor="rgba(0,128,0,0.2)" 
              style={styles.activeBtn}>
              <View>
                <Text style={styles.activeText}>Login</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={() => {}} 
              underlayColor="rgba(0,128,0,0.2)" 
              style={styles.btn}>
              <View>
                <Text style={styles.text}>SignUp</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        {/* <Login /> */}
        <SignUp />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
  },

  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    marginBottom: 20
  },

  logo: {
      flexDirection: 'row',
      justifyContent: 'center',
      height: 40,
      width: 40,
  },

  logoName: {
    fontSize: 24,
    fontWeight: '500',
    color: 'green'
  },

  welcomeMsg: {
      textAlign: 'center',
      fontSize: 20,
      color: 'rgb(50, 50, 50)',
      fontWeight: '500',
      padding: 5
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: screenWidth
  },

  btn: {
    width: screenWidth/2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(200,200,200)'
  },

  activeBtn: {
    width: screenWidth/2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'green'
  },

  text: {
    fontSize: 18,
    color: 'rgb(200,200,200)'
  },

  activeText: {
    fontSize: 18,
    color: 'green',
    fontWeight: '600'
  }
})