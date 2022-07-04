import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  DefaultTheme,
  StackActions,
} from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";

import Home from "./src/Home/Home";
import SecondPage from "./src/ScondPage/SecondPage";
import ThirdFolder from "./src/ThirdFolder/ThirdFolder";
import Fourth from "./src/FourthScreen/Fourth";
const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <NavigationContainer theme={theme}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="Home"
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="SecondPage" component={SecondPage} />
              <Stack.Screen name="ThirdFolder" component={ThirdFolder} />
              <Stack.Screen name="Fourth" component={Fourth} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </>
  );
}
