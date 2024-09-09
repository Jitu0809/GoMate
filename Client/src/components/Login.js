import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import SocialSignIn from './SocialSignIn';
import { CustomInput } from './CustomInput';
import { CustomButton } from './CustomButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Login = () => {
  return (
    <View style={styles.inputContainer}>
      <View>
        <SocialSignIn />
        <View style={styles.line}>
          <Text style={styles.dividerText}>or continue with email</Text>
        </View>
        <View style={styles.credentialsInput}>
          <CustomInput 
            style={styles.emailInput}
            iconImage={require('../../assets/mail_icon.png')}
            placeholder='Enter Your Email'
            keyboardType='email-address'
            selectionColor='rgb(180,180,180)'
          />
          <CustomInput 
            style={styles.emailInput}
            iconImage={require('../../assets/lock_icon.png')}
            placeholder='Enter Your Password'
            keyboardType='password'
            selectionColor='rgb(180,180,180)'
            secureTextEntry= {true}
          />
          <TouchableHighlight>
            <Text style={styles.forgotPassText}>Forgot Passwod?</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View>
        <View style={styles.loginBtnContainer}>
          <CustomButton 
            title={'Login'}
            style={styles.loginBtn} 
            textStyle={{ color: 'white' }}
          />
        </View>
        <View style={styles.policyTextContainer}> 
          <Text style={{ textAlign: 'center', width: screenWidth*0.8 }}>By Signing up, you agree to our <Text style={styles.policyText}>Terms of Service</Text> and <Text style={styles.policyText}>Privacy Policy</Text></Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'rgb(230,230,230)',
    width: screenWidth,
    height: screenHeight*0.7 + 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },

  line: {
    borderTopWidth: 2,
    borderColor: 'rgb(200,200,200)',
    position: 'relative'
  },

  dividerText: {
    fontSize: 16,
    textAlign: 'center',
    position: 'absolute',
    top: -12,
    left: screenWidth/2 - 75,
    backgroundColor: 'rgb(230,230,230)',
    color: 'rgb(150,150,150)',
    paddingHorizontal: 5
  },

  credentialsInput: {
    marginVertical: 40,
    width: screenWidth,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15
  },

  forgotPassText: {
    color: 'rgb(100,100,100)'
  },

  loginBtnContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginBtn: {
    width: screenWidth*0.8,
    backgroundColor: 'green',
  },

  policyTextContainer: {
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 25
  },

  policyText: {
    color: 'green',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline'
  }
})

export default Login