import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./App/Screens/home";
import CryptosScreen from "./App/Screens/cryptos";
import IndexScreen from "./App/Screens";
import UserScreen from "./App/Screens/user";

import * as WebBrowser from "expo-web-browser"
import * as Google from "expo-auth-session/providers/google"
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth"
import { auth } from "./credencials";

import RegisterScreen from "./App/Screens/RegisterScreen";
import InversionesScreen from "./App/Screens/inversions";
import InvestmentCoursesScreen from "./App/Screens/HowInvert";
import WalletScreen from "./App/Screens/Wallet";
import Categories from "./App/Screens/Categories";
import LearnScreen from "./App/Screens/LearnScreen";
import CoinDetail from "./App/Screens/CoinDetail";

WebBrowser.maybeCompleteAuthSession()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId : "49068587417-lm5o70dh1pah1rsnpa96ag44q33n75ij.apps.googleusercontent.com"
  });

  React.useEffect(() => {
    if (response && response.type === "success" && response.params) {
      const { id_token } = response.params;
      if (id_token) {
        const { credentials } = GoogleAuthProvider.credential(id_token);
        signInWithCredential(auth, credentials)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setUserInfo(user);
            // ...
          })
          .catch((error) => {
            // Handle errors
            console.error("Error signing in with Google:", error);
          });
      }
    }
  }, [response]);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="cryptosIndex" component={CryptosScreen} />
       
    
        <Stack.Screen name="InversionsScreen" component={InversionesScreen} />
        <Stack.Screen name="Investment Courses" component={InvestmentCoursesScreen} />
        <Stack.Screen name="WalletScreen" component={WalletScreen} />
        <Stack.Screen name="CategoriesScreen" component={Categories} />
        <Stack.Screen name="LeanScreen" component={LearnScreen} />
        <Stack.Screen name="CoinDetailScreen" component={CoinDetail} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
