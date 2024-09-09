
import { StatusBar } from 'expo-status-bar';
import { Animated, Button, Dimensions, Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { useEffect, useState } from 'react';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


export default function WelcomeScreen({ navigation }) {   
  const [animation] = useState(new Animated.Value(0));
  const [slide, setSlide] = useState(0);

  const slideContent = [
    {
      title: 'Welcome to the app',
      description: 'This is a simple app that will help you to learn about the different types of',
      image: require('../../assets/welcome-image.png')
    },
    {
      title: 'How to use the app',
      description: 'This app helps you to find friends with them you can travel around the world.',
      image: require('../../assets/welcome-image2.png')
    },
    {
      title: 'Find Your Travel Buddies',
      description: 'Bye to friends, who always cancels the plan at last moment. Find perfect travel buddies here.',
      image: require('../../assets/welcome-image3.png')
    }
  ]

  const startAnimation = () => {
    Animated.spring(animation, {
      toValue: -slide*screenWidth,
      useNativeDriver: false
    }).start();
  };

  useEffect(()=>{
    startAnimation();
  },[slide])
  
  return (
    <View style={styles.mainContainer}>
      <TouchableHighlight style={styles.skipTextContainer} onPress={()=>{navigation.navigate('Login')}}>
          <Text style={styles.skipText}>Skip</Text>
      </TouchableHighlight>
      <View style={styles.swipeDots}>
          <View style={[styles.dot, slide === 0?styles.active:null]}></View>
          <View style={[styles.dot, slide === 1?styles.active:null]}></View>
          <View style={[styles.dot, slide === 2?styles.active:null]}></View>
      </View>
      <Animated.View style={[styles.slider, { marginLeft: animation }]}>
        {
          slideContent.map((item, index) => {
            return <View key={index}>
              <View style={styles.topSection}>
                <Image
                    style={styles.welcomeImage}
                    source={item.image} 
                />
              </View>
              <View style={styles.bottomSection}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
                <CustomButton
                    title={index+1 === 3?'Login':'Next'}
                    style={styles.nextButton}
                    textStyle={styles.buttonText} 
                    onPress={()=>{index+1 !== 3?setSlide(index+1):navigation.navigate('Login')}}
                />
              </View>
            </View>
          })
        }
      </Animated.View>
      <StatusBar style='inverted' />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: screenHeight,
    position: 'relative',
    backgroundColor: 'green',
  },
  topSection: {
    height: screenHeight*0.6,
    backgroundColor: 'green',
  }, 
  welcomeImage:{
    width: '100%',
    height: '100%'
  },
  skipTextContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    fontSize: 16,
    color: 'white',
    zIndex: 1,
  },
  skipText: {
    fontSize: 16,
    color: 'white'
  },
  swipeDots: {
    flexDirection: 'row',
    gap: 5,
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  dot: {
    height: 6,
    width: 6,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  active: {
    width: 15,
  },
  slider: {
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  bottomSection: {
    height: screenHeight*0.4 + 40,
    width: screenWidth,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textContainer: {
      alignItems: 'center'
  },
  title: {
    paddingTop: 15,
    fontSize: 30,
    color: 'green',
  },
  description: {
    padding: 30,
    fontSize: 15,
    textAlign: 'center'
  },
  nextButton: {
    width: '80%',
    backgroundColor: 'green',
    marginBottom: 40
  },
  buttonText: {
    color: 'white'
  }
});
