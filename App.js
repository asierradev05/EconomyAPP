import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./App/Screens/home";
import { Cryptos, index } from "./constants/icons";
import RegisterScreen from "./App/Screens/RegisterScreen";


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
        initialRouteName="home"
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="index" component={index}/>
        <Stack.Screen name="cryptosIndex" component={Cryptos}/>
        <Stack.Screen name="RegisterIndex" component={RegisterScreen}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
