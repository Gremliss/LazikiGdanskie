import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./app/screens/MainScreen";
import GdanskieKajtki from "./app/screens/GdanskieKajtki";

const Stack = createStackNavigator();

export default function App() {
  const RenderMainScreen = (props) => <MainScreen {...props} />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={RenderMainScreen}
          name="MainScreen"
          options={{
            title: "Łaziki Gdańskie",
          }}
        />
        <Stack.Screen
          component={GdanskieKajtki}
          name="GdanskieKajtki"
          options={{ title: "Gdańskie Kajtki" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
