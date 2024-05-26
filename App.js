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

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
        <Stack.Screen name="cryptosIndex" component={CryptosScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="InversionsScreen" component={InversionesScreen} />
        <Stack.Screen name="InvestmentCoursesScreen" component={InvestmentCoursesScreen} />
        <Stack.Screen name="WalletScreen" component={WalletScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
