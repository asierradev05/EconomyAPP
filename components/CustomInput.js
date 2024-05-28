import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/theme';

const CustomInput = ({ 
  iconName = 'md-information-circle', 
  placeholder = 'Placeholder', 
  value, 
  onChangeText, 
  secureTextEntry = false, 
  keyboardType = 'default' 
}) => {
  return (
    <View style={styles.inputContainer}>
      <Ionicons name={iconName} size={24} color={COLORS.lightGray} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.lightGray}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: SIZES.radius,
    marginBottom: SIZES.base * 1.5,
    paddingHorizontal: SIZES.base * 1.5,
    paddingVertical: SIZES.base,
    width: '100%',
  },
  icon: {
    marginRight: SIZES.base,
  },
  input: {
    flex: 1,
    color: COLORS.white,
    height: 40,
  },
});

export default CustomInput;
