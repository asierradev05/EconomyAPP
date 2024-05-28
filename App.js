import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./App/Screens/home";
import CryptosScreen from "./App/Screens/cryptos";
import IndexScreen from "./App/Screens";
import UserScreen from "./App/Screens/user";

import RegisterScreen from "./App/Screens/RegisterScreen";
import InversionesScreen from "./App/Screens/inversions";
import InvestmentCoursesScreen from "./App/Screens/HowInvert";
import WalletScreen from "./App/Screens/Wallet";
import Categories from "./App/Screens/Categories";
import LearnScreen from "./App/Screens/LearnScreen";
import CoinDetail from "./App/Screens/CoinDetail";

import GoogleAuth from "./constants/googleAuth"; // Importa el componente GoogleAuth

import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  // Estado para almacenar la información del usuario
  const [userInfo, setUserInfo] = React.useState(null);

  return (
    <NavigationContainer theme={theme}>
      {/* Componente para gestionar la autenticación de Google */}
      <GoogleAuth />
      {/* Definición de las pantallas */}
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
        <Stack.Screen name="CoinDetailScreen" component={CoinDetail} />
        <Stack.Screen name="CategoriesScreen" component={Categories} />
        <Stack.Screen name="WalletScreen" component={WalletScreen} />
        <Stack.Screen name="LeanScreen" component={LearnScreen} />
        <Stack.Screen name="InversionsScreen" component={InversionesScreen} />
        <Stack.Screen name="Investment Courses" component={InvestmentCoursesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
