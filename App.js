import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Login from "./screens/login";
import Signup from "./screens/signup";
import Cover from "./screens/cover";
import Choose from "./screens/choose";
import Home from "./screens/home";
import Jurusan from "./screens/jurusan";
import Konsultasi from "./screens/konsultasi";
import Profile from "./screens/profile";
import EditProfile from "./screens/editprofile";
import JurusanDetail from "./screens/jurusan-detail"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Cover" component={Cover} options={noHead} />
    <Stack.Screen name="Signup" component={Signup} options={noHead} />
    <Stack.Screen name="Login" component={Login} options={noHead} />
  </Stack.Navigator> 
);

const MainStackNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = 'home-outline';
            break;
          case 'Jurusan':
            iconName = 'school-outline';
            break;
          case 'Konsultasi':
            iconName = 'newspaper-outline';
            break;
          case 'Profile':
            iconName = 'person-outline';
            break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            color={focused ? 'white' : color}
          />
        );
      },
      tabBarIconStyle: { marginTop: 5 },
      tabBarStyle: {
        height: 90,
        borderTopWidth: 0,
        backgroundColor: '#042564',
        elevation: 0,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        // marginHorizontal: 5,
      },
      tabBarLabel: ({ children, color, focused }) => (
        <Text color={focused ? 'white' : color} mb={2}>
          {children}
        </Text>
      ),
    })}
  >
    <Tab.Screen name="Home" component={Home} options={noHead} />
    <Tab.Screen name="Jurusan" component={Jurusan} options={noHead} />
    <Tab.Screen name="Konsultasi" component={Konsultasi} options={noHead} />
    <Tab.Screen name="Profile" component={Profile} options={noHead} />
  </Tab.Navigator>
);

const App = () => {
  const isLoggedIn = true; // Update this based on the user's login status

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {!isLoggedIn ? (
      
            <Stack.Screen name="Auth" component={AuthStack} options={noHead} />
          ) : (
            <Stack.Screen name="MainStack" component={MainStackNavigator} options={noHead} />
          )}
          <Stack.Screen name="Choose" component={Choose} options={noHead} />
          <Stack.Screen name="EditProfile" component={EditProfile} options={noHead} />
          <Stack.Screen name="Detail Jurusan" component={JurusanDetail} options={noHead} />
          <Stack.Screen name="Jurusan" component={Jurusan} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;