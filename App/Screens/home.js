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
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import { auth } from "../../credencials";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [animation] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "49068587417-lm5o70dh1pah1rsnpa96ag44q33n75ij.apps.googleusercontent.com",
  });

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          const user = userCredential.user;
          // Signed in
          console.log("User signed in: ", user);
          setUserInfo(user);
          navigation.navigate("IndexScreen");
        })
        .catch((error) => {
          console.log("Error signing in with Google: ", error);
          Alert.alert("Error", "Failed to sign in with Google.");
        });
    }
  }, [response]);

  const navigateToRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  const InicioSesionlogueo = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Iniciando sesión", "Ingresando");
      navigation.navigate("IndexScreen");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      let errorMessage = "Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.";
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        errorMessage = "Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.";
      }
      Alert.alert("Error", errorMessage);
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

      <View style={styles.containerLogoGoogle}>
        <TouchableOpacity style={styles.googleButton} onPress={() => promptAsync()}>
          <Ionicons name="logo-google" size={24} color="#1E88E5" />
          <Text style={styles.googleButtonText}>Ingresar con Google</Text>
        </TouchableOpacity>
      </View>

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
  containerLogoGoogle: {
    justifyContent: "center",
    alignItems: "center",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF", // Fondo blanco
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // Bordes redondeados
  },
  googleButtonText: {
    color: "#1E88E5", // Texto azul
    fontSize: 18,
    marginLeft: 10,
  },
});

export default LoginScreen;
