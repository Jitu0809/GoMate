import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { CustomButton } from './CustomButton'

const screenWidth = Dimensions.get('window').width;

const SocialSignIn = () => {
  return (
    <View style={styles.mainContainer}>
      <CustomButton 
        title='Login with Apple' 
        style={styles.btn} 
        textStyle={styles.btnText} 
        iconImage={require('../../assets/apple_icon.png')} 
      />
      <CustomButton 
        title='Login with Google' 
        style={styles.btn} 
        textStyle={styles.btnText}
        iconImage={require('../../assets/google_icon.png')} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        marginTop: 40,
        marginBottom: 40
    }, 

    btn: {
      width: screenWidth*0.8,
    },

    btnText: {
      fontSize: 16,
      fontWeight: '500'
    }

})

export default SocialSignIn