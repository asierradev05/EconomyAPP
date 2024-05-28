import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Easing, StatusBar, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../constants/theme';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from '../../constants/images';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const animation = useState(new Animated.Value(0))[0];
  const navigation = useNavigation();

  const handleRegister = async () => {
    // Validar datos de entrada antes de registrar al usuario
    if (!name || !lastName || !email || !password || !phoneNumber) {
      alert('Please fill in all fields.');
      return;
    }

    const userData = { email, password, name, lastName, phoneNumber };
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      console.log('User data saved successfully in AsyncStorage', userData);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error saving user data to AsyncStorage:', error);
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  return (
    <LinearGradient colors={[COLORS.primary, COLORS.secondary]} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.View style={[styles.logoContainer, { transform: [{ scale: animation }] }]}>
        <Image source={images.logos.logoTransparente} style={styles.logo} />
      </Animated.View>
      <Text style={styles.title}>Registration</Text>
      <CustomInput
        iconName="person-outline"
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <CustomInput
        iconName="person-outline"
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <CustomInput
        iconName="mail-outline"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        iconName="lock-closed-outline"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomInput
        iconName="call-outline"
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <CustomButton title="Register Now" onPress={handleRegister} />
      <TouchableOpacity style={styles.link} onPress={navigateToLogin}>
        <Text style={styles.linkText}>Back to login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
  },
  logoContainer: {
    marginBottom: SIZES.padding,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: SIZES.font * 1.75,
    color: COLORS.white,
    marginBottom: SIZES.padding,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  link: {
    marginBottom: SIZES.base,
  },
  linkText: {
    color: COLORS.white,
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
