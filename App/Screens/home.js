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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const animation = useState(new Animated.Value(0))[0];
  const navigation = useNavigation();

  const navigateToRegister = () => {
    navigation.navigate("RegisterIndex");
  };
  const InicioSesion = () => {
    navigation.navigate("index");
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
          onChangeText={setEmail}
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
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={InicioSesion}>
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#fff",
    height: 40,
  },
  button: {
    width: "100%",
    backgroundColor: "#1E88E5",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginBottom: 10,
  },
  linkText: {
    color: "#fff",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
