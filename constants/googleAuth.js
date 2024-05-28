import React from "react";
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../credencials";

const GoogleAuth = () => {
  // Estado para gestionar la respuesta de la autenticación de Google
  const [response, promptAsync] = Google.useAuthRequest({
    androidClientId : "TU_CLIENT_ID"
  });

  // Efecto para gestionar la respuesta de la autenticación de Google
  React.useEffect(() => {
    if (response && response.type === "success" && response.params) {
      const { id_token } = response.params;
      if (id_token) {
        const { credentials } = GoogleAuthProvider.credential(id_token);
        signInWithCredential(auth, credentials)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // Actualizar el estado de userInfo con la información del usuario
          })
          .catch((error) => {
            // Handle errors
            console.error("Error signing in with Google:", error);
          });
      }
    }
  }, [response]);

  return null; // Este componente no renderiza nada visualmente
};

export default GoogleAuth;
