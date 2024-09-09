import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

export const CustomButton = ({ title, onPress, style, textStyle, iconImage }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} underlayColor="rgba(0,128,0,0.2)">
      {iconImage && <Image source={iconImage} style={styles.icon} />}
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    elevation: 2, // Android only
    shadowColor: '#000', // iOS only
    shadowOpacity: 0.2,
    shadowRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  
  buttonText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },

  icon: {
    height: 18,
    width: 18
  }
});