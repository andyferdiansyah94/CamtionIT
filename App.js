import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { 
  Home,
  Login,
  Cover,
  SignUp,
  Choose,
  Jurusan,
  JurusanDetail,
  Konsultasi,
  Profile,
  EditProfile
 } from "./src/screens"
// import { Jurusan, Home, Login, Cover, SignUp, Choose, JurusanDetail, Konsultasi, EditProfile, Profile } from "./src/screens";
// import Choose from "./src/screens/choose";
// import Cover from "./src/screens/cover";
// import Home from "./src/screens/home";
// import Konsultasi from "./src/screens/konsultasi";
// import Jurusan from "./src/screens/jurusan";
// import JurusanDetail from "./src/screens/jurusan-detail";
// import Profile from "./src/screens/profile";
// import EditProfile from "./src/screens/editprofile";
// import SignUp from "./src/screens/signup";
// import Login from "./src/screens/login";





// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route, navigation }) => ({
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
      },
      tabBarLabel: ({ children, color, focused }) => (
        <Text color={focused ? 'white' : color} mb={2}>
          {children}
        </Text>
      ),
      tabBarPress: ({ route }) => {
        // Handle custom navigation logic if needed
        if (route.name === 'Home') {
          // Navigate to the Stack Navigator containing Home
          navigation.navigate('Home');
        } else {
          // Handle other tab navigations
          navigation.navigate(route.name);
        }
      },
    })}
  >
    <Tab.Screen name="Home" component={Home} options={noHead} />
    <Tab.Screen name="Jurusan" component={Jurusan} options={noHead} />
    <Tab.Screen name="Konsultasi" component={Konsultasi} options={noHead} />
    <Tab.Screen name="Profile" component={Profile} options={noHead} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Cover">
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="Cover" component={Cover} options={noHead} />
          <Stack.Screen name="Choose" component={Choose} options={noHead} />
          <Stack.Screen name="SignUp" component={SignUp} options={noHead} />
          <Stack.Screen name="Login" component={Login} options={noHead} />
          <Stack.Screen name="Jurusan" component={Jurusan} options={noHead} />
          <Stack.Screen name="Konsultasi" component={Konsultasi} options={noHead} />
          <Stack.Screen name="Detail Jurusan" component={JurusanDetail} options={noHead} />
          <Stack.Screen name="EditProfile" component={EditProfile} options={noHead}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
