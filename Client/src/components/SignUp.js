import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { CustomInput } from './CustomInput'
import FeatherIcon from 'react-native-vector-icons/Feather';
import CheckBox from 'react-native-check-box';
import { CustomButton } from './CustomButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SignUp = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.signUpForm}>
        <CustomInput
            iconImage = {require('../../assets/user_icon.png')}
            placeholder = "Username"
            selectionColor='rgb(180,180,180)'
        />
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
        <CustomInput 
            style={styles.emailInput}
            iconImage={require('../../assets/lock_icon.png')}
            placeholder='Confirm Your Password'
            keyboardType='password'
            selectionColor='rgb(180,180,180)'
            secureTextEntry= {true}
        />
        <View>
            <View style={styles.passwordConditions}>
                <FeatherIcon name="check-circle" size={15} color="#0d0d0d" />
                <Text>At least 8 characters</Text>
            </View>
            <View style={styles.passwordConditions}>
                <FeatherIcon name="check-circle" size={15} color="#0d0d0d" />
                <Text>At least 1 number</Text>
            </View>
            <View style={styles.passwordConditions}>
                <FeatherIcon name="check-circle" size={15} color="#0d0d0d" />
                <Text>Both uppercase and lowecase letters</Text>
            </View>
        </View>
      </View>
      <View style={styles.singupBtnContainer}>
        <View style={styles.acceptTermsContainer}>
            <CheckBox 
                onClick={()=>{console.log('Checkbox active')}}
            />
            <Text>By agreeing to the terms and conditions, you are entering</Text>
        </View>
        <View>
          <CustomButton 
            title={'Login'}
            style={styles.signUpBtn} 
            textStyle={{ color: 'white' }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: screenHeight*0.7 + 30,
        backgroundColor: 'rgb(230,230,230)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 25
    },

    signUpForm: {
        padding: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 15
    },

    passwordConditions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5,
        width: screenWidth*0.8 ,
    },

    singupBtnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 15
    },

    acceptTermsContainer: {
        width: screenWidth*0.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5
    },

    signUpBtn: {
        width: screenWidth*0.8,
        backgroundColor: 'green',
    }
})

export default SignUp