import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Easing, StatusBar, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../constants/theme';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const animation = useState(new Animated.Value(0))[0];
  const navigation = useNavigation();

  const handleRegister = () => {
    console.log('Email:', email);
    console.log('Contraseña:', password);
    console.log('Nombre:', name);
    console.log('Apellido:', lastName);
    console.log('Número de teléfono:', phoneNumber);
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
        <Image source={require('../../assets/images/LogoTrasparente.png')} style={styles.logo} />
      </Animated.View>
      <Text style={styles.title}>Registro</Text>
      <CustomInput
        iconName="person-outline"
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <CustomInput
        iconName="person-outline"
        placeholder="Apellido"
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
        placeholder="Número de teléfono"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <CustomButton title="Registrarse" onPress={handleRegister} />
      <TouchableOpacity style={styles.link} onPress={navigateToLogin}>
        <Text style={styles.linkText}>Volver al inicio de sesión</Text>
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
