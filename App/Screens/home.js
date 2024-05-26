import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Easing,
  StatusBar,
  Alert
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import appFirebases from "../../credencials";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = (props) => {
  const auth = getAuth(appFirebases);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const navigateToRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  const InicioSesionlogueo = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Iniciando sesión", "Ingresando");
      props.navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to sign in. Please check your credentials and try again.");
    }
  };

  return (
    <LinearGradient colors={["#1E2749", "#283C63"]} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.View
        style={[styles.logoContainer, { transform: [{ scale: animation }] }]}
      >
        <Image
          source={require("../../assets/images/LogoTrasparente.png")}
          style={styles.logo}
        />
      </Animated.View>
      <Text style={styles.title}>Welcome To EconomyAPP</Text>
      <View style={styles.inputContainer}>
        <Ionicons
          name="mail-outline"
          size={24}
          color="#ccc"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={24}
          color="#ccc"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={InicioSesionlogueo}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() =>
          console.log("Ir a la pantalla de recuperación de contraseña")
        }
      >
        <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={navigateToRegister}>
        <Text style={styles.linkText}>Registrarse</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafa',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#1E2749',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  greetingText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questionText: {
    fontSize: 18,
    color: '#CCCCCC',
    marginTop: 5,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    color: '#1E2749',
  },
  searchButton: {
    padding: 10,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  learningContainer: {
    marginTop: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  learningTextContainer: {
    flex: 1,
  },
  learningText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E2749',
  },
  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  categoriesText: {
    fontSize: 14,
    color: '#1E2749',
    marginRight: 10,
  },
  categoriesButton: {
    backgroundColor: '#1E88E5',
    borderRadius: 25,
    padding: 10,
  },
  learningImage: {
    width: 100,
    height: 100,
    marginLeft: 20,
  },
  utilitiesTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E2749',
    marginTop: 20,
  },
  cardContainer: {
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
    justifyContent: 'space-between', // Añadido para alinear elementos a los extremos
  },
  utilityImage: {
    width: 100,
    height: 100,
  },
  cardTextContainer: {
    marginLeft: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E2749',
  },
  cardDescription: {
    fontSize: 14,
    color: '#1E2749',
    marginTop: 5,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1E2749',
  },
});

export default IndexScreen;
