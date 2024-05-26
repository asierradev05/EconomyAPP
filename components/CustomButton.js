import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: COLORS.blue,
    borderRadius: SIZES.radius,
    paddingVertical: SIZES.base * 1.5,
    alignItems: 'center',
    marginBottom: SIZES.base,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.font + 2,
    fontWeight: 'bold',
  },
});

export default CustomButton;
