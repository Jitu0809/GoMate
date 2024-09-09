import { View, Text, TextInput, StyleSheet, Animated, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'

const screenWidth = Dimensions.get('window').width;

export const CustomInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <Image source={props.iconImage} style={styles.icon} />
        <TextInput
            style={[styles.input, props.style]}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            autoCapitalize='none'
            selectionColor={props.selectionColor}
            value={props.value}
            onChangeText={props.onChangeText}
            auto 
        />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    elevation: 2, // Android only
    shadowColor: '#000', // iOS only
    shadowOpacity: 0.2,
    shadowRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: screenWidth*0.8
  },

  icon: {
    height: 18,
    width: 18,
  },

  input: {
      paddingHorizontal: 5,
      paddingVertical: 1,
      borderColor: 'none',
      borderWidth: 1,
      width: screenWidth*0.65,
      borderColor: 'white',
      fontSize: 16
  },
})